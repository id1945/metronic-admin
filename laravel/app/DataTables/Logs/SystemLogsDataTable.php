<?php

namespace App\DataTables\Logs;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Jackiedo\LogReader\Exceptions\UnableToRetrieveLogFilesException;
use Jackiedo\LogReader\LogReader;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class SystemLogsDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param  mixed  $query  Results from query() method.
     *
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->collection($query)
            ->rawColumns(['action', 'level'])
            ->editColumn('id', function (Collection $model) {
                return Str::limit($model->get('id'), 5, '');
            })
            ->editColumn('file_path', function (Collection $model) {
                return Str::limit($model->get('file_path'));
            })
            ->editColumn('message', function (Collection $model) {
                return Str::limit($model->get('context')->message, 95);
            })
            ->editColumn('date', function (Collection $model) {
                return $model->get('date')->format('d M, Y H:i:s');
            })
            ->editColumn('level', function (Collection $model) {
                $styles = [
                    'emergency' => 'danger',
                    'alert'     => 'warning',
                    'critical'  => 'danger',
                    'error'     => 'danger',
                    'warning'   => 'warning',
                    'notice'    => 'success',
                    'info'      => 'info',
                    'debug'     => 'primary',
                ];
                $style  = 'info';
                if (isset($styles[$model->get('level')])) {
                    $style = $styles[$model->get('level')];
                }
                $value = $model->get('level');

                return '<div class="badge badge-light-'.$style.' fw-bolder">'.$value.'</div>';
            })
            ->editColumn('context', function (Collection $model) {
                $content = $model->get('context');

                return view('pages.log.system._details', compact('content'));
            })
            ->addColumn('action', function (Collection $model) {
                return view('pages.log.system._action-menu', compact('model'));
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param  LogReader  $model
     *
     * @return Collection
     */
    public function query(LogReader $model)
    {
        $data = collect();

        $model->setLogPath(storage_path('logs'));

        try {
            $data = $model->get()->merge($data);
        } catch (UnableToRetrieveLogFilesException $exception) {
        }

        $data = $data->map(function ($a) {
            return (collect($a))->only(['id', 'date', 'environment', 'level', 'file_path', 'context']);
        });

        return $data;
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
            ->setTableId('system-log-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
            ->stateSave(true)
            ->orderBy(3)
            ->responsive()
            ->autoWidth(false)
            ->parameters(['scrollX' => true])
            ->addTableClass('align-middle table-row-dashed fs-6 gy-5');
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('id')->title('Log ID')->width(50),
            Column::make('message'),
            Column::make('level'),
            Column::make('date')->width(130),
            Column::computed('action')
                ->exportable(false)
                ->printable(false)
                ->addClass('text-center')
                ->responsivePriority(-1),
            Column::make('environment')->addClass('none'),
            Column::make('file_path')->title(__('Log Path'))->addClass('none'),
            Column::make('context')->addClass('none'),
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'SystemLogs_'.date('YmdHis');
    }
}

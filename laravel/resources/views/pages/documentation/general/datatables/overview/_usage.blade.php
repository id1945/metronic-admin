<!--begin::Section-->
<div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="usage">
        <a href="#usage"></a>
        Usage
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
        Create controller and DataTable class
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        {{ util()->highlight('
php artisan make:controller UsersController
php artisan datatables:make Users
        ', 'bash') }}
    </div>
    <!--end::Code-->

    <!--begin::Block-->
    <div class="py-5">
        The command above will create a DataTable controller file in <code>app/DataTables/UsersDataTable.php</code>.
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        {{ util()->highlight('namespace App\DataTables;

use App\User;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class UsersDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->addColumn(\'action\', \'users.action\');
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\User $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(User $model)
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->setTableId(\'users-table\')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    ->dom(\'Bfrtip\')
                    ->orderBy(1)
                    ->buttons(
                        Button::make(\'create\'),
                        Button::make(\'export\'),
                        Button::make(\'print\'),
                        Button::make(\'reset\'),
                        Button::make(\'reload\')
                    );
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::computed(\'action\')
                  ->exportable(false)
                  ->printable(false)
                  ->width(60)
                  ->addClass(\'text-center\'),
            Column::make(\'id\'),
            Column::make(\'name\'),
            Column::make(\'email\'),
            Column::make(\'created_at\'),
            Column::make(\'updated_at\'),
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return \'Users_\' . date(\'YmdHis\');
    }
}
', 'php') }}
    </div>
    <!--end::Code-->

    <!--begin::Block-->
    <div class="py-5">
        Create a new HTTP controller file in <code>app/Http/Controllers/UsersController.php</code>.
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        {{ util()->highlight('namespace App\Http\Controllers;

use App\DataTables\UsersDataTable;

class UsersController extends Controller
{
    public function index(UsersDataTable $dataTable)
    {
        return $dataTable->render(\'users.index\');
    }
}', 'php') }}
    </div>
    <!--end::Code-->

    <!--begin::Block-->
    <div class="py-5">
        For more information, check on the official <a href="https://yajrabox.com/docs/laravel-datatables/master/quick-starter" target="_blank">documentation site</a>.
    </div>
    <!--end::Block-->

</div>
<!--end::Section-->

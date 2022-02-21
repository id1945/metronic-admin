<?php

namespace App\Http\Controllers\Logs;

use App\DataTables\Logs\AuditLogsDataTable;
use App\Http\Controllers\Controller;
use Spatie\Activitylog\Models\Activity;

class AuditLogsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(AuditLogsDataTable $dataTable)
    {
        return $dataTable->render('pages.log.audit.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $activity = Activity::find($id);

        // Delete from db
        $activity->delete();
    }
}

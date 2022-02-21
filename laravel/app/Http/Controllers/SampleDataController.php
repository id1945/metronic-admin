<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;

class SampleDataController extends Controller
{
    /**
     * Sample data calculation and formatting
     *
     * @return \Illuminate\Support\Collection
     */
    public function profits()
    {
        $months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        $data = collect(json_decode(file_get_contents(resource_path('samples/sales.json'))));

        $d = $data->groupBy(function ($data) {
            return Carbon::parse($data->datetime)->format('Y-m');
        })->map(function ($data) {
            return [
                'profit'  => number_format($data->sum('profit') / 11, 2),
                'revenue' => number_format($data->sum('revenue') / 13, 2),
            ];
        })->sortKeys()->mapWithKeys(function ($data, $key) use ($months) {
            return [$months[Carbon::parse($key)->format('n')] => $data];
        });

        return $d;
    }
}

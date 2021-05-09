{{-- Extends layout --}}
@extends('layout.default')

{{-- Content --}}
@section('content')

<div class="card card-custom example example-compact">
    <div class="card-header">
        <h3 class="card-title">
            JQuery Mask Examples
        </h3>
        <div class="card-toolbar">
            <div class="example-tools justify-content-center">
                <span class="example-toggle" data-toggle="tooltip" title="View code"></span>
            </div>
        </div>
    </div>
    <!--begin::Form-->
    <form class="form">
        <div class="card-body">
            <!--begin: Code-->
            <div class="example-code mb-10">
                <ul class="example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#example_code_html" >HTML</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#example_code_js" >JS</a>
                    </li>
                </ul>
                <span class="example-copy" data-toggle="tooltip" title="Copy code"></span>
                <div class="tab-content">
                    <div class="tab-pane active" id="example_code_html" role="tabpanel">
                    </div>
                    <div class="tab-pane" id="example_code_js">

                    </div>
                </div>
            </div>
            <!--end: Code-->

            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">Date</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control date" id="kt_date_input"/>
                    <span class="form-text text-muted">Custom date format: <code>mm/dd/yyyy</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">Hour</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control time" id="kt_time_input"/>
                    <span class="form-text text-muted">Custom time format: <code>hh:mm:ss</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">Date & Hour</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control date_time" id="kt_date_time_input"/>
                    <span class="form-text text-muted">Custom date & time format: <code>mm/dd/yyyy hh:mm:ss</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">ZIP Code</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control cep" id="kt_cep_input"/>
                    <span class="form-text text-muted">Zip code mask: <code>99999-999</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">Telephone</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control phone" id="kt_phone_input"/>
                    <span class="form-text text-muted">Telephone mask: <code>9999-9999</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">Telephone with Code Area</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control phone_with_ddd" id="kt_phone_with_ddd_input"/>
                    <span class="form-text text-muted">Telephone with Code Area mask: <code>(99) 9999-9999</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">CPF</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control cpf" id="kt_cpf_input"/>
                    <span class="form-text text-muted">CPF format: <code>999.999.999-99</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">CNPJ</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control cnpj" id="kt_cnpj_input"/>
                    <span class="form-text text-muted">CNPJ format: <code>99.999.999/9999-99</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">Money</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control money" id="kt_money_input"/>
                    <span class="form-text text-muted">Money format: <code>999.999.999.999.999,99</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">Money 2</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control money2" id="kt_money2_input"/>
                    <span class="form-text text-muted">Money format: <code>_.__9,99</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">Percent</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control percent" id="kt_percent_input"/>
                    <span class="form-text text-muted">Percent format: <code>__9,99%</code></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label text-right col-lg-3 col-sm-12">With Clear If Not Match Option</label>
                <div class="col-lg-6 col-md-9 col-sm-12">
                    <input type="text" class="form-control clear-if-not-match" id="kt_clear_if_not_match_input"/>
                    <span class="form-text text-muted">Date format: <code>mm/dd/yyyy</code></span>
                </div>
            </div>


        </div>
        <div class="card-footer">
            <div class="row">
                <div class="col-lg-9 ml-lg-auto">
                    <button type="reset" class="btn btn-success mr-2">Submit</button>
                    <button type="reset" class="btn btn-secondary">Cancel</button>
                </div>
            </div>
        </div>
    </form>
    <!--end::Form-->
</div>

@endsection

{{-- Scripts Section --}}
@section('scripts')
<script>
    $('#kt_date_input').mask('00/00/0000', {
        placeholder: "dd/mm/yyyy"
    });

    $('#kt_time_input').mask('00:00:00', {
        placeholder: "hh:mm:ss"
    });

    $('#kt_date_time_input').mask('00/00/0000 00:00:00', {
        placeholder: "dd/mm/yyyy hh:mm:ss"
    });

    $('#kt_cep_input').mask('00000-000', {
        placeholder: "99999-999"
    });

    $('#kt_phone_input').mask('0000-0000', {
        placeholder: "9999-9999"
    });

    $('#kt_phone_with_ddd_input').mask('(00) 0000-0000', {
        placeholder: "(99) 9999-9999"
    });

    $('#kt_cpf_input').mask('000.000.000-00', {
        reverse: true
    });

    $('#kt_cnpj_input').mask('00.000.000/0000-00', {
        reverse: true
    });

    $('#kt_money_input').mask('000.000.000.000.000,00', {
        reverse: true
    });

    $('#kt_money2_input').mask("#.##0,00", {
        reverse: true
    });

    $('#kt_percent_input').mask('##0,00%', {
        reverse: true
    });

    $('#kt_clear_if_not_match_input').mask("00/00/0000", {
        clearIfNotMatch: true
    });
</script>
@endsection

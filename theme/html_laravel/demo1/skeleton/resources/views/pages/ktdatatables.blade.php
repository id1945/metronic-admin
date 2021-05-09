{{-- Extends layout --}}
@extends('layout.default')

{{-- Content --}}
@section('content')

    <div class="card card-custom">
        <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title">
                <h3 class="card-label">HTML Table
                    <div class="text-muted pt-2 font-size-sm">Datatable initialized from HTML table</div>
                </h3>
            </div>
            <div class="card-toolbar">
                <!--begin::Dropdown-->
                <div class="dropdown dropdown-inline mr-2">
                    <button type="button" class="btn btn-light-primary font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span class="svg-icon svg-icon-md">
                                                    <!--begin::Svg Icon | path:assets/media/svg/icons/Design/PenAndRuller.svg-->
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24"/>
                                                            <path d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill="#000000" opacity="0.3"/>
                                                            <path d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill="#000000"/>
                                                        </g>
                                                    </svg>
                                                    <!--end::Svg Icon-->
                                                </span>Export
                    </button>
                    <!--begin::Dropdown Menu-->
                    <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                        <!--begin::Navigation-->
                        <ul class="navi flex-column navi-hover py-2">
                            <li class="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">Choose an option:</li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                                                <span class="navi-icon">
                                                                    <i class="la la-print"></i>
                                                                </span>
                                    <span class="navi-text">Print</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                                                <span class="navi-icon">
                                                                    <i class="la la-copy"></i>
                                                                </span>
                                    <span class="navi-text">Copy</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                                                <span class="navi-icon">
                                                                    <i class="la la-file-excel-o"></i>
                                                                </span>
                                    <span class="navi-text">Excel</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                                                <span class="navi-icon">
                                                                    <i class="la la-file-text-o"></i>
                                                                </span>
                                    <span class="navi-text">CSV</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                                                <span class="navi-icon">
                                                                    <i class="la la-file-pdf-o"></i>
                                                                </span>
                                    <span class="navi-text">PDF</span>
                                </a>
                            </li>
                        </ul>
                        <!--end::Navigation-->
                    </div>
                    <!--end::Dropdown Menu-->
                </div>
                <!--end::Dropdown-->
                <!--begin::Button-->
                <a href="#" class="btn btn-primary font-weight-bolder">
                                            <span class="svg-icon svg-icon-md">
                                                <!--begin::Svg Icon | path:assets/media/svg/icons/Design/Flatten.svg-->
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24"/>
                                                        <circle fill="#000000" cx="9" cy="15" r="6"/>
                                                        <path d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z" fill="#000000" opacity="0.3"/>
                                                    </g>
                                                </svg>
                                                <!--end::Svg Icon-->
                                            </span>New Record</a>
                <!--end::Button-->
            </div>
        </div>
        <div class="card-body">
            <!--begin: Search Form-->
            <!--begin::Search Form-->
            <div class="mb-7">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-xl-8">
                        <div class="row align-items-center">
                            <div class="col-md-4 my-2 my-md-0">
                                <div class="input-icon">
                                    <input type="text" class="form-control" placeholder="Search..." id="kt_datatable_search_query"/>
                                    <span>
                                                                    <i class="flaticon2-search-1 text-muted"></i>
                                                                </span>
                                </div>
                            </div>
                            <div class="col-md-4 my-2 my-md-0">
                                <div class="d-flex align-items-center">
                                    <label class="mr-3 mb-0 d-none d-md-block">Status:</label>
                                    <select class="form-control" id="kt_datatable_search_status">
                                        <option value="">All</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Canceled</option>
                                        <option value="4">Success</option>
                                        <option value="5">Info</option>
                                        <option value="6">Danger</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4 my-2 my-md-0">
                                <div class="d-flex align-items-center">
                                    <label class="mr-3 mb-0 d-none d-md-block">Type:</label>
                                    <select class="form-control" id="kt_datatable_search_type">
                                        <option value="">All</option>
                                        <option value="1">Online</option>
                                        <option value="2">Retail</option>
                                        <option value="3">Direct</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                        <a href="#" class="btn btn-light-primary px-6 font-weight-bold">Search</a>
                    </div>
                </div>
            </div>
            <!--end::Search Form-->
            <!--end: Search Form-->
            <!--begin: Datatable-->
            <table class="datatable datatable-bordered datatable-head-custom" id="kt_datatable">
                <thead>
                <tr>
                    <th title="Field #1">Order ID</th>
                    <th title="Field #2">Car Make</th>
                    <th title="Field #3">Car Model</th>
                    <th title="Field #4">Color</th>
                    <th title="Field #5">Deposit Paid</th>
                    <th title="Field #6">Order Date</th>
                    <th title="Field #7">Status</th>
                    <th title="Field #8">Type</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>0006-3629</td>
                    <td>Land Rover</td>
                    <td>Range Rover</td>
                    <td>Orange</td>
                    <td>$22672.60</td>
                    <td>2016-11-28</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>66403-315</td>
                    <td>GMC</td>
                    <td>Jimmy</td>
                    <td>Goldenrod</td>
                    <td>$55141.29</td>
                    <td>2017-04-29</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>54868-5055</td>
                    <td>Ford</td>
                    <td>Club Wagon</td>
                    <td>Goldenrod</td>
                    <td>$70991.52</td>
                    <td>2017-03-16</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>44924-112</td>
                    <td>GMC</td>
                    <td>Envoy</td>
                    <td>Indigo</td>
                    <td>$42615.31</td>
                    <td>2016-09-04</td>
                    <td align="right">2</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>0378-0357</td>
                    <td>Saab</td>
                    <td>9-5</td>
                    <td>Teal</td>
                    <td>$74919.63</td>
                    <td>2017-09-21</td>
                    <td align="right">4</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>0363-0590</td>
                    <td>Suzuki</td>
                    <td>Grand Vitara</td>
                    <td>Crimson</td>
                    <td>$72908.80</td>
                    <td>2017-04-03</td>
                    <td align="right">5</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>35356-778</td>
                    <td>Dodge</td>
                    <td>Ram 2500</td>
                    <td>Goldenrod</td>
                    <td>$13569.00</td>
                    <td>2016-03-22</td>
                    <td align="right">5</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>48951-3040</td>
                    <td>Mitsubishi</td>
                    <td>Eclipse</td>
                    <td>Aquamarine</td>
                    <td>$22471.73</td>
                    <td>2016-04-17</td>
                    <td align="right">1</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>0487-9801</td>
                    <td>Pontiac</td>
                    <td>GTO</td>
                    <td>Green</td>
                    <td>$43149.39</td>
                    <td>2016-05-27</td>
                    <td align="right">4</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>54753-003</td>
                    <td>Audi</td>
                    <td>S4</td>
                    <td>Turquoise</td>
                    <td>$39286.74</td>
                    <td>2016-07-23</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>34460-6006</td>
                    <td>Audi</td>
                    <td>Allroad</td>
                    <td>Mauv</td>
                    <td>$47394.02</td>
                    <td>2016-06-21</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>62802-106</td>
                    <td>GMC</td>
                    <td>Sierra 1500</td>
                    <td>Teal</td>
                    <td>$47469.52</td>
                    <td>2016-05-06</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>43269-664</td>
                    <td>Buick</td>
                    <td>Terraza</td>
                    <td>Orange</td>
                    <td>$94980.73</td>
                    <td>2017-08-17</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>65862-602</td>
                    <td>Ford</td>
                    <td>Crown Victoria</td>
                    <td>Green</td>
                    <td>$36215.40</td>
                    <td>2016-09-01</td>
                    <td align="right">6</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>18527-119</td>
                    <td>Toyota</td>
                    <td>Sequoia</td>
                    <td>Mauv</td>
                    <td>$46000.92</td>
                    <td>2016-05-17</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>55910-994</td>
                    <td>Mercedes-Benz</td>
                    <td>C-Class</td>
                    <td>Turquoise</td>
                    <td>$76272.22</td>
                    <td>2016-01-10</td>
                    <td align="right">6</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>49349-441</td>
                    <td>Audi</td>
                    <td>Cabriolet</td>
                    <td>Red</td>
                    <td>$33624.99</td>
                    <td>2017-07-31</td>
                    <td align="right">2</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>0573-0232</td>
                    <td>Hyundai</td>
                    <td>Tucson</td>
                    <td>Puce</td>
                    <td>$97796.98</td>
                    <td>2017-02-10</td>
                    <td align="right">2</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>49643-326</td>
                    <td>Lexus</td>
                    <td>IS</td>
                    <td>Pink</td>
                    <td>$88864.37</td>
                    <td>2016-06-01</td>
                    <td align="right">5</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>0944-2627</td>
                    <td>Audi</td>
                    <td>S4</td>
                    <td>Maroon</td>
                    <td>$25024.94</td>
                    <td>2016-12-16</td>
                    <td align="right">4</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>33992-1210</td>
                    <td>BMW</td>
                    <td>7 Series</td>
                    <td>Green</td>
                    <td>$89144.60</td>
                    <td>2017-06-02</td>
                    <td align="right">4</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>53808-0478</td>
                    <td>Volkswagen</td>
                    <td>Eurovan</td>
                    <td>Red</td>
                    <td>$69113.93</td>
                    <td>2017-12-17</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>51531-0332</td>
                    <td>Mitsubishi</td>
                    <td>Tredia</td>
                    <td>Aquamarine</td>
                    <td>$28062.46</td>
                    <td>2016-03-14</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>49852-181</td>
                    <td>Ford</td>
                    <td>Thunderbird</td>
                    <td>Green</td>
                    <td>$75325.45</td>
                    <td>2016-12-12</td>
                    <td align="right">1</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>49614-133</td>
                    <td>Jeep</td>
                    <td>Grand Cherokee</td>
                    <td>Mauv</td>
                    <td>$45865.14</td>
                    <td>2017-01-11</td>
                    <td align="right">2</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>0264-1800</td>
                    <td>Hyundai</td>
                    <td>XG350</td>
                    <td>Khaki</td>
                    <td>$82969.08</td>
                    <td>2017-10-27</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>36987-2784</td>
                    <td>Lexus</td>
                    <td>LX</td>
                    <td>Puce</td>
                    <td>$50958.79</td>
                    <td>2016-09-20</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>43319-050</td>
                    <td>Lexus</td>
                    <td>GS</td>
                    <td>Orange</td>
                    <td>$13672.91</td>
                    <td>2017-11-23</td>
                    <td align="right">1</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>33261-026</td>
                    <td>Chevrolet</td>
                    <td>SSR</td>
                    <td>Teal</td>
                    <td>$25036.57</td>
                    <td>2017-10-28</td>
                    <td align="right">4</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>60505-0381</td>
                    <td>Chrysler</td>
                    <td>New Yorker</td>
                    <td>Yellow</td>
                    <td>$35660.00</td>
                    <td>2017-01-21</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>29500-2438</td>
                    <td>Saturn</td>
                    <td>S-Series</td>
                    <td>Khaki</td>
                    <td>$79451.58</td>
                    <td>2017-09-24</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>21695-901</td>
                    <td>Volvo</td>
                    <td>XC70</td>
                    <td>Goldenrod</td>
                    <td>$34678.63</td>
                    <td>2016-12-26</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>48951-7062</td>
                    <td>Mercedes-Benz</td>
                    <td>CLm-Class</td>
                    <td>Yellow</td>
                    <td>$86018.69</td>
                    <td>2016-07-16</td>
                    <td align="right">4</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>57520-0214</td>
                    <td>Suzuki</td>
                    <td>Grand Vitara</td>
                    <td>Orange</td>
                    <td>$48087.48</td>
                    <td>2017-06-13</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>0143-1240</td>
                    <td>Mazda</td>
                    <td>Miata MX-5</td>
                    <td>Green</td>
                    <td>$72500.87</td>
                    <td>2017-04-26</td>
                    <td align="right">1</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>34666-091</td>
                    <td>Cadillac</td>
                    <td>DeVille</td>
                    <td>Goldenrod</td>
                    <td>$54846.02</td>
                    <td>2016-12-29</td>
                    <td align="right">2</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>65044-1300</td>
                    <td>Subaru</td>
                    <td>Impreza</td>
                    <td>Yellow</td>
                    <td>$64200.42</td>
                    <td>2016-07-08</td>
                    <td align="right">1</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>54868-6195</td>
                    <td>Dodge</td>
                    <td>Caravan</td>
                    <td>Yellow</td>
                    <td>$35142.11</td>
                    <td>2016-11-25</td>
                    <td align="right">4</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>36987-1837</td>
                    <td>Volkswagen</td>
                    <td>New Beetle</td>
                    <td>Maroon</td>
                    <td>$44383.94</td>
                    <td>2016-03-29</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>50580-669</td>
                    <td>Lotus</td>
                    <td>Exige</td>
                    <td>Orange</td>
                    <td>$73977.83</td>
                    <td>2017-10-29</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>65044-4703</td>
                    <td>Toyota</td>
                    <td>Solara</td>
                    <td>Fuscia</td>
                    <td>$23480.69</td>
                    <td>2016-12-03</td>
                    <td align="right">2</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>50730-8628</td>
                    <td>Suzuki</td>
                    <td>SX4</td>
                    <td>Green</td>
                    <td>$77498.41</td>
                    <td>2017-11-14</td>
                    <td align="right">1</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>64896-672</td>
                    <td>Volvo</td>
                    <td>940</td>
                    <td>Violet</td>
                    <td>$85460.14</td>
                    <td>2016-08-09</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>17772-121</td>
                    <td>Dodge</td>
                    <td>Grand Caravan</td>
                    <td>Crimson</td>
                    <td>$70315.20</td>
                    <td>2017-06-07</td>
                    <td align="right">2</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>57520-1032</td>
                    <td>Chevrolet</td>
                    <td>Express 3500</td>
                    <td>Yellow</td>
                    <td>$35840.40</td>
                    <td>2016-10-26</td>
                    <td align="right">1</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>62206-4760</td>
                    <td>Dodge</td>
                    <td>Viper</td>
                    <td>Aquamarine</td>
                    <td>$87294.01</td>
                    <td>2016-09-06</td>
                    <td align="right">4</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>49349-123</td>
                    <td>BMW</td>
                    <td>X3</td>
                    <td>Khaki</td>
                    <td>$20584.12</td>
                    <td>2016-09-26</td>
                    <td align="right">1</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>49726-026</td>
                    <td>Hummer</td>
                    <td>H2</td>
                    <td>Pink</td>
                    <td>$99359.45</td>
                    <td>2016-03-22</td>
                    <td align="right">6</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>0378-6540</td>
                    <td>Bentley</td>
                    <td>Continental Flying Spur</td>
                    <td>Fuscia</td>
                    <td>$31824.99</td>
                    <td>2017-08-28</td>
                    <td align="right">1</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>65977-5037</td>
                    <td>Chevrolet</td>
                    <td>3500</td>
                    <td>Violet</td>
                    <td>$11410.89</td>
                    <td>2017-10-17</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>10337-061</td>
                    <td>Mercury</td>
                    <td>Grand Marquis</td>
                    <td>Goldenrod</td>
                    <td>$78350.91</td>
                    <td>2017-08-10</td>
                    <td align="right">6</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>0407-1401</td>
                    <td>GMC</td>
                    <td>Sonoma Club Coupe</td>
                    <td>Goldenrod</td>
                    <td>$58769.66</td>
                    <td>2017-11-24</td>
                    <td align="right">5</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>55315-531</td>
                    <td>Chrysler</td>
                    <td>Town &amp; Country</td>
                    <td>Pink</td>
                    <td>$68769.98</td>
                    <td>2016-10-04</td>
                    <td align="right">5</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>13107-031</td>
                    <td>Mazda</td>
                    <td>Mazda6</td>
                    <td>Teal</td>
                    <td>$98059.90</td>
                    <td>2017-08-27</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>52584-978</td>
                    <td>Cadillac</td>
                    <td>CTS</td>
                    <td>Teal</td>
                    <td>$92723.12</td>
                    <td>2016-10-21</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>65044-1451</td>
                    <td>Volkswagen</td>
                    <td>Touareg</td>
                    <td>Aquamarine</td>
                    <td>$14614.66</td>
                    <td>2017-08-18</td>
                    <td align="right">2</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>57297-201</td>
                    <td>Chrysler</td>
                    <td>300C</td>
                    <td>Indigo</td>
                    <td>$88757.67</td>
                    <td>2016-09-24</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>55154-6256</td>
                    <td>GMC</td>
                    <td>Yukon XL 1500</td>
                    <td>Goldenrod</td>
                    <td>$38738.02</td>
                    <td>2016-04-21</td>
                    <td align="right">1</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>50169-0007</td>
                    <td>Honda</td>
                    <td>Prelude</td>
                    <td>Indigo</td>
                    <td>$24546.46</td>
                    <td>2017-09-23</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>61786-001</td>
                    <td>Toyota</td>
                    <td>Avalon</td>
                    <td>Turquoise</td>
                    <td>$71384.57</td>
                    <td>2017-11-27</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>58232-0527</td>
                    <td>Cadillac</td>
                    <td>Catera</td>
                    <td>Khaki</td>
                    <td>$42349.91</td>
                    <td>2016-08-18</td>
                    <td align="right">1</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>0075-0626</td>
                    <td>Lamborghini</td>
                    <td>Diablo</td>
                    <td>Maroon</td>
                    <td>$19993.34</td>
                    <td>2017-02-28</td>
                    <td align="right">1</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>52584-928</td>
                    <td>Mitsubishi</td>
                    <td>Galant</td>
                    <td>Indigo</td>
                    <td>$27921.88</td>
                    <td>2017-05-11</td>
                    <td align="right">4</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>63868-106</td>
                    <td>Isuzu</td>
                    <td>Trooper</td>
                    <td>Aquamarine</td>
                    <td>$95391.97</td>
                    <td>2016-10-21</td>
                    <td align="right">4</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>54868-5918</td>
                    <td>Daewoo</td>
                    <td>Leganza</td>
                    <td>Purple</td>
                    <td>$99652.50</td>
                    <td>2016-09-24</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>62097-0003</td>
                    <td>BMW</td>
                    <td>X5</td>
                    <td>Orange</td>
                    <td>$98667.84</td>
                    <td>2016-05-07</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>49349-222</td>
                    <td>Land Rover</td>
                    <td>Discovery</td>
                    <td>Blue</td>
                    <td>$29519.94</td>
                    <td>2017-05-14</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>64725-2957</td>
                    <td>Honda</td>
                    <td>Odyssey</td>
                    <td>Teal</td>
                    <td>$83826.93</td>
                    <td>2017-09-13</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>59088-962</td>
                    <td>Dodge</td>
                    <td>Journey</td>
                    <td>Goldenrod</td>
                    <td>$90702.32</td>
                    <td>2017-02-15</td>
                    <td align="right">5</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>60681-1804</td>
                    <td>Pontiac</td>
                    <td>Firefly</td>
                    <td>Goldenrod</td>
                    <td>$50858.26</td>
                    <td>2017-11-28</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>58668-3251</td>
                    <td>Nissan</td>
                    <td>Murano</td>
                    <td>Yellow</td>
                    <td>$43973.10</td>
                    <td>2016-01-27</td>
                    <td align="right">2</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>16590-870</td>
                    <td>Toyota</td>
                    <td>Solara</td>
                    <td>Yellow</td>
                    <td>$79845.88</td>
                    <td>2016-09-04</td>
                    <td align="right">4</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>0159-2200</td>
                    <td>Honda</td>
                    <td>Prelude</td>
                    <td>Yellow</td>
                    <td>$21019.04</td>
                    <td>2016-07-06</td>
                    <td align="right">1</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>36987-2048</td>
                    <td>Ford</td>
                    <td>F350</td>
                    <td>Violet</td>
                    <td>$28398.23</td>
                    <td>2016-09-09</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>66116-471</td>
                    <td>GMC</td>
                    <td>Vandura G2500</td>
                    <td>Pink</td>
                    <td>$41272.55</td>
                    <td>2016-08-16</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>46122-194</td>
                    <td>Buick</td>
                    <td>Century</td>
                    <td>Green</td>
                    <td>$38542.57</td>
                    <td>2017-04-08</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>60505-2665</td>
                    <td>Ford</td>
                    <td>E-Series</td>
                    <td>Orange</td>
                    <td>$17418.92</td>
                    <td>2017-09-05</td>
                    <td align="right">4</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>49999-958</td>
                    <td>Maserati</td>
                    <td>Coupe</td>
                    <td>Yellow</td>
                    <td>$82070.50</td>
                    <td>2017-11-21</td>
                    <td align="right">5</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>43353-763</td>
                    <td>Porsche</td>
                    <td>Carrera GT</td>
                    <td>Yellow</td>
                    <td>$98546.87</td>
                    <td>2017-03-20</td>
                    <td align="right">4</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>55714-4528</td>
                    <td>Buick</td>
                    <td>LaCrosse</td>
                    <td>Green</td>
                    <td>$13443.37</td>
                    <td>2016-08-29</td>
                    <td align="right">1</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>62037-560</td>
                    <td>Chevrolet</td>
                    <td>Equinox</td>
                    <td>Green</td>
                    <td>$46644.32</td>
                    <td>2016-09-27</td>
                    <td align="right">1</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>36987-2934</td>
                    <td>Pontiac</td>
                    <td>Grand Am</td>
                    <td>Teal</td>
                    <td>$46571.89</td>
                    <td>2016-10-30</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>65044-5054</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>Turquoise</td>
                    <td>$73062.72</td>
                    <td>2016-02-19</td>
                    <td align="right">4</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>69015-110</td>
                    <td>Ford</td>
                    <td>F-Series</td>
                    <td>Goldenrod</td>
                    <td>$58325.82</td>
                    <td>2017-12-10</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>63868-172</td>
                    <td>Maybach</td>
                    <td>57</td>
                    <td>Goldenrod</td>
                    <td>$27746.98</td>
                    <td>2016-09-16</td>
                    <td align="right">1</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>11673-136</td>
                    <td>Isuzu</td>
                    <td>Hombre</td>
                    <td>Pink</td>
                    <td>$25289.00</td>
                    <td>2016-06-08</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>68391-319</td>
                    <td>Mercury</td>
                    <td>Mystique</td>
                    <td>Maroon</td>
                    <td>$94443.18</td>
                    <td>2017-01-19</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>51334-289</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>Crimson</td>
                    <td>$54495.33</td>
                    <td>2016-08-26</td>
                    <td align="right">4</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>51531-4189</td>
                    <td>Mazda</td>
                    <td>Mazda2</td>
                    <td>Orange</td>
                    <td>$61069.76</td>
                    <td>2016-07-17</td>
                    <td align="right">2</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>76260-105</td>
                    <td>Buick</td>
                    <td>Riviera</td>
                    <td>Aquamarine</td>
                    <td>$73556.08</td>
                    <td>2017-02-09</td>
                    <td align="right">6</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>35000-120</td>
                    <td>Chevrolet</td>
                    <td>Citation</td>
                    <td>Teal</td>
                    <td>$93666.82</td>
                    <td>2016-08-09</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>16714-271</td>
                    <td>Ford</td>
                    <td>Edge</td>
                    <td>Orange</td>
                    <td>$88055.07</td>
                    <td>2017-08-23</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>76214-032</td>
                    <td>Chrysler</td>
                    <td>Pacifica</td>
                    <td>Orange</td>
                    <td>$90127.90</td>
                    <td>2016-12-20</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>36987-2910</td>
                    <td>Ford</td>
                    <td>Escort</td>
                    <td>Blue</td>
                    <td>$31400.58</td>
                    <td>2017-05-24</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>52584-631</td>
                    <td>Dodge</td>
                    <td>Dakota</td>
                    <td>Purple</td>
                    <td>$11543.58</td>
                    <td>2016-12-03</td>
                    <td align="right">1</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>36987-2632</td>
                    <td>BMW</td>
                    <td>530</td>
                    <td>Purple</td>
                    <td>$88325.98</td>
                    <td>2016-06-26</td>
                    <td align="right">4</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>50436-0127</td>
                    <td>Buick</td>
                    <td>LeSabre</td>
                    <td>Fuscia</td>
                    <td>$74403.19</td>
                    <td>2016-07-30</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>50227-0511</td>
                    <td>Chrysler</td>
                    <td>Town &amp; Country</td>
                    <td>Khaki</td>
                    <td>$70358.02</td>
                    <td>2016-02-22</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>51079-201</td>
                    <td>Chevrolet</td>
                    <td>Suburban 2500</td>
                    <td>Maroon</td>
                    <td>$50056.31</td>
                    <td>2017-02-13</td>
                    <td align="right">1</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>52456-018</td>
                    <td>Porsche</td>
                    <td>Cayman</td>
                    <td>Maroon</td>
                    <td>$54197.10</td>
                    <td>2016-08-16</td>
                    <td align="right">5</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>64942-1096</td>
                    <td>Buick</td>
                    <td>Electra</td>
                    <td>Blue</td>
                    <td>$10415.17</td>
                    <td>2016-11-13</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>41250-994</td>
                    <td>Mazda</td>
                    <td>CX-7</td>
                    <td>Pink</td>
                    <td>$10107.79</td>
                    <td>2016-01-02</td>
                    <td align="right">6</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>55714-4405</td>
                    <td>GMC</td>
                    <td>Sonoma Club Coupe</td>
                    <td>Crimson</td>
                    <td>$72222.41</td>
                    <td>2017-06-27</td>
                    <td align="right">1</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>65862-460</td>
                    <td>Ford</td>
                    <td>E-Series</td>
                    <td>Fuscia</td>
                    <td>$33476.23</td>
                    <td>2017-09-24</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>49852-164</td>
                    <td>Toyota</td>
                    <td>Tundra</td>
                    <td>Puce</td>
                    <td>$48155.56</td>
                    <td>2017-03-09</td>
                    <td align="right">2</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>17238-625</td>
                    <td>Chevrolet</td>
                    <td>Express 3500</td>
                    <td>Crimson</td>
                    <td>$57862.14</td>
                    <td>2017-05-08</td>
                    <td align="right">5</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>0603-5449</td>
                    <td>Land Rover</td>
                    <td>Discovery Series II</td>
                    <td>Purple</td>
                    <td>$96847.00</td>
                    <td>2017-06-24</td>
                    <td align="right">4</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>0615-7757</td>
                    <td>GMC</td>
                    <td>Canyon</td>
                    <td>Violet</td>
                    <td>$98422.58</td>
                    <td>2017-04-01</td>
                    <td align="right">5</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>55264-021</td>
                    <td>Mazda</td>
                    <td>Mazda2</td>
                    <td>Orange</td>
                    <td>$20775.71</td>
                    <td>2016-07-12</td>
                    <td align="right">1</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>37808-961</td>
                    <td>BMW</td>
                    <td>M3</td>
                    <td>Turquoise</td>
                    <td>$11082.97</td>
                    <td>2016-08-28</td>
                    <td align="right">1</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>13107-119</td>
                    <td>Dodge</td>
                    <td>Ram 1500</td>
                    <td>Orange</td>
                    <td>$60145.34</td>
                    <td>2017-10-19</td>
                    <td align="right">6</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>0268-0825</td>
                    <td>Pontiac</td>
                    <td>Grand Am</td>
                    <td>Teal</td>
                    <td>$64669.18</td>
                    <td>2016-09-01</td>
                    <td align="right">4</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>49348-047</td>
                    <td>Chrysler</td>
                    <td>Concorde</td>
                    <td>Aquamarine</td>
                    <td>$97877.37</td>
                    <td>2016-10-13</td>
                    <td align="right">1</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>58668-2691</td>
                    <td>Porsche</td>
                    <td>Panamera</td>
                    <td>Maroon</td>
                    <td>$47292.30</td>
                    <td>2016-07-28</td>
                    <td align="right">2</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>76168-009</td>
                    <td>Chevrolet</td>
                    <td>Tahoe</td>
                    <td>Blue</td>
                    <td>$82565.90</td>
                    <td>2016-12-25</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>61941-0042</td>
                    <td>Saturn</td>
                    <td>VUE</td>
                    <td>Crimson</td>
                    <td>$92470.85</td>
                    <td>2017-07-04</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>68428-047</td>
                    <td>Kia</td>
                    <td>Mentor</td>
                    <td>Pink</td>
                    <td>$20117.71</td>
                    <td>2016-12-03</td>
                    <td align="right">1</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>63214-102</td>
                    <td>Chevrolet</td>
                    <td>SSR</td>
                    <td>Aquamarine</td>
                    <td>$26697.23</td>
                    <td>2016-06-28</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>64760-019</td>
                    <td>Acura</td>
                    <td>RL</td>
                    <td>Crimson</td>
                    <td>$26345.59</td>
                    <td>2017-03-12</td>
                    <td align="right">2</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>0378-6120</td>
                    <td>Ford</td>
                    <td>Econoline E350</td>
                    <td>Turquoise</td>
                    <td>$69574.74</td>
                    <td>2016-04-21</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>10742-8597</td>
                    <td>Kia</td>
                    <td>Sorento</td>
                    <td>Red</td>
                    <td>$37394.42</td>
                    <td>2017-05-11</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>60429-616</td>
                    <td>GMC</td>
                    <td>Yukon XL 2500</td>
                    <td>Crimson</td>
                    <td>$88038.77</td>
                    <td>2017-10-14</td>
                    <td align="right">5</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>68180-882</td>
                    <td>Peugeot</td>
                    <td>207</td>
                    <td>Green</td>
                    <td>$39938.08</td>
                    <td>2017-11-09</td>
                    <td align="right">4</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>55714-8001</td>
                    <td>Lincoln</td>
                    <td>LS</td>
                    <td>Maroon</td>
                    <td>$42066.09</td>
                    <td>2016-05-12</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>42507-092</td>
                    <td>Volkswagen</td>
                    <td>Golf</td>
                    <td>Purple</td>
                    <td>$66158.98</td>
                    <td>2017-10-11</td>
                    <td align="right">4</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>58411-154</td>
                    <td>Volvo</td>
                    <td>S40</td>
                    <td>Goldenrod</td>
                    <td>$64825.98</td>
                    <td>2017-12-02</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>46987-325</td>
                    <td>Dodge</td>
                    <td>Ram 3500</td>
                    <td>Teal</td>
                    <td>$42231.35</td>
                    <td>2017-07-27</td>
                    <td align="right">2</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>41520-958</td>
                    <td>GMC</td>
                    <td>Vandura G3500</td>
                    <td>Yellow</td>
                    <td>$64432.81</td>
                    <td>2016-03-06</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>0268-6317</td>
                    <td>Infiniti</td>
                    <td>FX</td>
                    <td>Khaki</td>
                    <td>$51991.87</td>
                    <td>2016-07-19</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>53489-119</td>
                    <td>Lexus</td>
                    <td>GS</td>
                    <td>Violet</td>
                    <td>$16309.60</td>
                    <td>2016-08-15</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>57261-786</td>
                    <td>Subaru</td>
                    <td>Alcyone SVX</td>
                    <td>Red</td>
                    <td>$58552.98</td>
                    <td>2017-05-12</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>53329-822</td>
                    <td>Chrysler</td>
                    <td>PT Cruiser</td>
                    <td>Violet</td>
                    <td>$32530.48</td>
                    <td>2016-04-05</td>
                    <td align="right">6</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>0615-4545</td>
                    <td>Dodge</td>
                    <td>Ram Wagon B150</td>
                    <td>Aquamarine</td>
                    <td>$75206.57</td>
                    <td>2016-08-12</td>
                    <td align="right">2</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>66761-122</td>
                    <td>Pontiac</td>
                    <td>Trans Sport</td>
                    <td>Mauv</td>
                    <td>$28790.67</td>
                    <td>2016-05-14</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>55289-241</td>
                    <td>Chevrolet</td>
                    <td>Silverado 1500</td>
                    <td>Puce</td>
                    <td>$68297.88</td>
                    <td>2016-11-11</td>
                    <td align="right">5</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>36987-1451</td>
                    <td>Land Rover</td>
                    <td>Defender 90</td>
                    <td>Puce</td>
                    <td>$30368.78</td>
                    <td>2017-10-16</td>
                    <td align="right">2</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>0781-5805</td>
                    <td>Mercury</td>
                    <td>Sable</td>
                    <td>Mauv</td>
                    <td>$56681.99</td>
                    <td>2016-11-16</td>
                    <td align="right">3</td>
                    <td align="right">1</td>
                </tr>
                <tr>
                    <td>0409-4646</td>
                    <td>Jeep</td>
                    <td>Cherokee</td>
                    <td>Red</td>
                    <td>$26926.81</td>
                    <td>2017-04-05</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>49643-017</td>
                    <td>Chevrolet</td>
                    <td>Express 3500</td>
                    <td>Aquamarine</td>
                    <td>$18094.00</td>
                    <td>2016-07-23</td>
                    <td align="right">4</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>50458-602</td>
                    <td>Buick</td>
                    <td>Skylark</td>
                    <td>Indigo</td>
                    <td>$85442.74</td>
                    <td>2017-02-27</td>
                    <td align="right">3</td>
                    <td align="right">2</td>
                </tr>
                <tr>
                    <td>51785-424</td>
                    <td>Bentley</td>
                    <td>Continental</td>
                    <td>Khaki</td>
                    <td>$35290.47</td>
                    <td>2017-12-04</td>
                    <td align="right">1</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>55648-771</td>
                    <td>Buick</td>
                    <td>LeSabre</td>
                    <td>Violet</td>
                    <td>$56243.46</td>
                    <td>2016-02-04</td>
                    <td align="right">3</td>
                    <td align="right">3</td>
                </tr>
                <tr>
                    <td>0187-0063</td>
                    <td>Mercedes-Benz</td>
                    <td>S-Class</td>
                    <td>Goldenrod</td>
                    <td>$97306.72</td>
                    <td>2017-11-06</td>
                    <td align="right">5</td>
                    <td align="right">3</td>
                </tr>
                </tbody>
            </table>
            <!--end: Datatable-->
        </div>
    </div>

@endsection

{{-- Styles Section --}}
@section('styles')

@endsection

{{-- Scripts Section --}}
@section('scripts')
    <script src="{{ asset('js/pages/crud/ktdatatable/base/html-table.js') }}" type="text/javascript"></script>
@endsection

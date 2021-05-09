@php
	$direction = config('layout.extras.quick-panel.offcanvas.direction', 'right');
@endphp
{{-- Quick Panel --}}
<div id="kt_quick_panel" class="offcanvas offcanvas-{{ $direction }} pt-5 pb-10">
	{{-- Header --}}
	<div class="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
		<ul class="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" data-toggle="tab" href="#kt_quick_panel_logs" >Audit Logs</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#kt_quick_panel_notifications" >Notifications</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#kt_quick_panel_settings" >Settings</a>
			</li>
		</ul>
		<div class="offcanvas-close mt-n1 pr-5">
			<a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_panel_close">
			<i class="ki ki-close icon-xs text-muted"></i>
			</a>
		</div>
	</div>

	{{-- Content --}}
	<div class="offcanvas-content px-10">
		<div class="tab-content">
			{{-- Tabpane --}}
			<div class="tab-pane fade show pt-3 pr-5 mr-n5 active" id="kt_quick_panel_logs" role="tabpanel">
				{{-- Section --}}
				<div class="mb-15">
					<h5 class="font-weight-bold mb-5">System Messages</h5>
					{{-- Item --}}
					<div class="d-flex align-items-center flex-wrap mb-5">
						<div class="symbol symbol-50 symbol-light mr-5">
							<span class="symbol-label">
								<img src="{{ asset('media/svg/misc/006-plurk.svg') }}" class="h-50 align-self-center" alt=""/>
							</span>
						</div>
						<div class="d-flex flex-column flex-grow-1 mr-2">
							<a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Top Authors</a>
							<span class="text-muted font-weight-bold">Most Successful Fellas</span>
						</div>
						<span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">+82$</span>
					</div>

					{{-- Item --}}
					<div class="d-flex align-items-center flex-wrap mb-5">
						<div class="symbol symbol-50 symbol-light mr-5">
							<span class="symbol-label">
								<img src="{{ asset('media/svg/misc/015-telegram.svg') }}" class="h-50 align-self-center" alt=""/>
							</span>
						</div>
						<div class="d-flex flex-column flex-grow-1 mr-2">
							<a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Popular Authors</a>
							<span class="text-muted font-weight-bold">Most Successful Fellas</span>
						</div>
						<span class="btn btn-sm btn-light font-weight-bolder  my-lg-0 my-2 py-1 text-dark-50">+280$</span>
					</div>

					{{-- Item --}}
					<div class="d-flex align-items-center flex-wrap mb-5">
						<div class="symbol symbol-50 symbol-light mr-5">
							<span class="symbol-label">
								<img src="{{ asset('media/svg/misc/003-puzzle.svg') }}" class="h-50 align-self-center" alt=""/>
							</span>
						</div>
						<div class="d-flex flex-column flex-grow-1 mr-2">
							<a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">New Users</a>
							<span class="text-muted font-weight-bold">Most Successful Fellas</span>
						</div>
						<span class="btn btn-sm btn-light font-weight-bolder  my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
					</div>

					{{-- Item --}}
					<div class="d-flex align-items-center flex-wrap mb-5">
						<div class="symbol symbol-50 symbol-light mr-5">
							<span class="symbol-label">
								<img src="{{ asset('media/svg/misc/005-bebo.svg') }}" class="h-50 align-self-center" alt=""/>
							</span>
						</div>
						<div class="d-flex flex-column flex-grow-1 mr-2">
							<a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Active Customers</a>
							<span class="text-muted font-weight-bold">Most Successful Fellas</span>
						</div>
						<span class="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
					</div>

					{{-- Item --}}
					<div class="d-flex align-items-center flex-wrap">
						<div class="symbol symbol-50 symbol-light mr-5">
							<span class="symbol-label">
								<img src="{{ asset('media/svg/misc/014-kickstarter.svg') }}" class="h-50 align-self-center" alt=""/>
							</span>
						</div>
						<div class="d-flex flex-column flex-grow-1 mr-2">
							<a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Bestseller Theme</a>
							<span class="text-muted font-weight-bold">Most Successful Fellas</span>
						</div>
						<span class="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
					</div>
				</div>

				{{-- Section --}}
				<div class="mb-5">
					<h5 class="font-weight-bold mb-5">Notifications</h5>

					{{-- Item --}}
			        <div class="d-flex align-items-center bg-light-warning rounded p-5 mb-5">
			            <span class="svg-icon svg-icon-warning mr-5">
			                {{ Metronic::getSVG("media/svg/icons/Home/Library.svg", "svg-icon-lg") }}
			            </span>

			            <div class="d-flex flex-column flex-grow-1 mr-2">
			                <a href="#" class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Another purpose persuade</a>
			                <span class="text-muted font-size-sm">Due in 2 Days</span>
			            </div>

			            <span class="font-weight-bolder text-warning py-1 font-size-lg">+28%</span>
			        </div>

			        {{-- Item --}}
			        <div class="d-flex align-items-center bg-light-success rounded p-5 mb-5">
			            <span class="svg-icon svg-icon-success mr-5">
			                {{ Metronic::getSVG("media/svg/icons/Communication/Write.svg", "svg-icon-lg") }}
			            </span>
			            <div class="d-flex flex-column flex-grow-1 mr-2">
			                <a href="#" class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Would be to people</a>
			                <span class="text-muted font-size-sm">Due in 2 Days</span>
			            </div>

			            <span class="font-weight-bolder text-success py-1 font-size-lg">+50%</span>
			        </div>

			        {{-- Item --}}
			        <div class="d-flex align-items-center bg-light-danger rounded p-5 mb-5">
			            <span class="svg-icon svg-icon-danger mr-5">
			                {{ Metronic::getSVG("media/svg/icons/Communication/Group-chat.svg", "svg-icon-lg") }}
			            </span>
			            <div class="d-flex flex-column flex-grow-1 mr-2">
			                <a href="#" class="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">Purpose would be to persuade</a>
			                <span class="text-muted font-size-sm">Due in 2 Days</span>
			            </div>

			            <span class="font-weight-bolder text-danger py-1 font-size-lg">-27%</span>
			        </div>

			        {{-- Item --}}
			        <div class="d-flex align-items-center bg-light-info rounded p-5">
			            <span class="svg-icon svg-icon-info mr-5">
			                {{ Metronic::getSVG("media/svg/icons/General/Attachment2.svg", "svg-icon-lg") }}
			            </span>

			            <div class="d-flex flex-column flex-grow-1 mr-2">
			                <a href="#" class="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">The best product</a>
			                <span class="text-muted font-size-sm">Due in 2 Days</span>
			            </div>

			            <span class="font-weight-bolder text-info py-1 font-size-lg">+8%</span>
			        </div>
				</div>

			</div>

			{{-- Tabpane --}}
			<div class="tab-pane fade pt-2 pr-5 mr-n5" id="kt_quick_panel_notifications" role="tabpanel">
				{{-- Nav --}}
				<div class="navi navi-icon-circle navi-spacer-x-0">
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon-bell text-success icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold font-size-lg">
									5 new user generated report
								</div>
								<div class="text-muted">
									Reports based on sales
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon2-box text-danger icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									2 new items submited
								</div>
								<div class="text-muted">
									by Grog John
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon-psd text-primary icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									79 PSD files generated
								</div>
								<div class="text-muted">
									Reports based on sales
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon2-supermarket text-warning icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									$2900 worth producucts sold
								</div>
								<div class="text-muted">
									Total 234 items
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon-paper-plane-1 text-success icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									4.5h-avarage response time
								</div>
								<div class="text-muted">
									Fostest is Barry
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon-safe-shield-protection text-danger icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									3 Defence alerts
								</div>
								<div class="text-muted">
									40% less alerts thar last week
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon-notepad text-primary icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									Avarage 4 blog posts per author
								</div>
								<div class="text-muted">
									Most posted 12 time
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon-users-1 text-warning icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									16 authors joined last week
								</div>
								<div class="text-muted">
									9 photodrapehrs, 7 designer
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon2-box text-info icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									2 new items have been submited
								</div>
								<div class="text-muted">
									by Grog John
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon2-download text-success icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									2.8 GB-total downloads size
								</div>
								<div class="text-muted">
									Mostly PSD end  AL concepts
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon2-supermarket text-danger icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									$2900 worth producucts sold
								</div>
								<div class="text-muted">
									Total 234 items
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon-bell text-primary icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									7 new user generated report
								</div>
								<div class="text-muted">
									Reports based on sales
								</div>
							</div>
						</div>
					</a>
					{{-- Item --}}
					<a href="#" class="navi-item">
						<div class="navi-link rounded">
							<div class="symbol symbol-50 mr-3">
								<div class="symbol-label"><i class="flaticon-paper-plane-1 text-success icon-lg"></i></div>
							</div>
							<div class="navi-text">
								<div class="font-weight-bold  font-size-lg">
									4.5h-avarage response time
								</div>
								<div class="text-muted">
									Fostest is Barry
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>

			{{-- Tabpane --}}
			<div class="tab-pane fade pt-3 pr-5 mr-n5" id="kt_quick_panel_settings" role="tabpanel">
				<form class="form">
					{{-- Section --}}
					<div>
						<h5 class="font-weight-bold mb-3">Customer Care</h5>
						<div class="form-group mb-0 row">
							<label class="col-8 col-form-label">Enable Notifications:</label>
							<div class="col-4 text-right">
								<span class="switch switch-success switch-sm">
									<label>
										<input type="checkbox" checked="checked" name="select"/>
										<span></span>
									</label>
								</span>
							</div>
						</div>
						<div class="form-group mb-0 row">
							<label class="col-8 col-form-label">Enable Case Tracking:</label>
							<div class="col-4 text-right">
								<span class="switch switch-success switch-sm">
									<label>
										<input type="checkbox"  name="quick_panel_notifications_2"/>
										<span></span>
									</label>
								</span>
							</div>
						</div>
						<div class="form-group mb-0 row">
							<label class="col-8 col-form-label">Support Portal:</label>
							<div class="col-4 text-right">
								<span class="switch switch-success switch-sm">
									<label>
										<input type="checkbox" checked="checked" name="select"/>
										<span></span>
									</label>
								</span>
							</div>
						</div>
					</div>

					<div class="separator separator-dashed my-6"></div>

					{{-- Section --}}
					<div class="pt-2">
						<h5 class="font-weight-bold mb-3">Reports</h5>
						<div class="form-group mb-0 row">
							<label class="col-8 col-form-label">Generate Reports:</label>
							<div class="col-4 text-right">
								<span class="switch switch-sm switch-danger">
									<label>
										<input type="checkbox" checked="checked" name="select"/>
										<span></span>
									</label>
								</span>
							</div>
						</div>
						<div class="form-group mb-0 row">
							<label class="col-8 col-form-label">Enable Report Export:</label>
							<div class="col-4 text-right">
								<span class="switch switch-sm switch-danger">
									<label>
										<input type="checkbox"  name="select"/>
										<span></span>
									</label>
								</span>
							</div>
						</div>
						<div class="form-group mb-0 row">
							<label class="col-8 col-form-label">Allow Data Collection:</label>
							<div class="col-4 text-right">
								<span class="switch switch-sm switch-danger">
									<label>
										<input type="checkbox" checked="checked" name="select"/>
										<span></span>
									</label>
								</span>
							</div>
						</div>
					</div>

					<div class="separator separator-dashed my-6"></div>

					{{-- Section --}}
					<div class="pt-2">
						<h5 class="font-weight-bold mb-3">Memebers</h5>
						<div class="form-group mb-0 row">
							<label class="col-8 col-form-label">Enable Member singup:</label>
							<div class="col-4 text-right">
								<span class="switch switch-sm switch-primary">
									<label>
										<input type="checkbox" checked="checked" name="select"/>
										<span></span>
									</label>
								</span>
							</div>
						</div>
						<div class="form-group mb-0 row">
							<label class="col-8 col-form-label">Allow User Feedbacks:</label>
							<div class="col-4 text-right">
								<span class="switch switch-sm switch-primary">
									<label>
										<input type="checkbox"  name="select"/>
										<span></span>
									</label>
								</span>
							</div>
						</div>
						<div class="form-group mb-0 row">
							<label class="col-8 col-form-label">Enable Customer Portal:</label>
							<div class="col-4 text-right">
								<span class="switch switch-sm switch-primary">
									<label>
										<input type="checkbox" checked="checked" name="select"/>
										<span></span>
									</label>
								</span>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

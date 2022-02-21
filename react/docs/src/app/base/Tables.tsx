/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from 'react'
import {CodeBlock} from '../../_metronic/partials'

export function Tables() {
  const {REACT_APP_THEME_NAME, REACT_APP_BOOTSTRAP_DOCS_LINK} = process.env
  return (
    <>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='overview'>
          <a href='#overview'></a>Overview
        </h1>
        <div className='py-5'>
          {REACT_APP_THEME_NAME} extends{' '}
          <a className='fw-bolder me-1' href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/content/tables/`}>
            Bootstrap Tables
          </a>
          to provide wider variants for multi-purpose usage
        </div>
      </div>
      <div className='pb-10'>
        <h1 className='anchor fw-bolder mb-5' id='basic-table'>
          <a href='#basic-table'></a>Basic Table
        </h1>
        <div className='my-5'>
          <table className='table'>
            <thead>
              <tr className='fw-bold fs-6 text-gray-800 border-bottom border-gray-200'>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock language='markup' code={code} />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='cell-spacing'>
          <a href='#cell-spacing'></a>Cell Spacing
        </h1>

        <div className='py-5'>
          To control cell paddings easily,{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/layout/gutters/`} className='fw-bolder me-1'>
            Bootstrap Gutters
          </a>
          classes
          <code>.g-*</code>&nbsp;,
          <code>.gy-*</code>&nbsp; and
          <code>.gx-*</code>&nbsp; can be used. Use
          <code>.gs-*</code>to set padding left to the first cell and padding right to the last cell
          in the row.
        </div>

        <div className='my-5'>
          <table className='table gs-7 gy-7 gx-7'>
            <thead>
              <tr className='fw-bold fs-6 text-gray-800 border-bottom border-gray-200'>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock code={code2} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='cell-spacing'>
          <a href='#cell-spacing'></a>Row Border Styling
        </h1>
        <div className='py-5'>
          Use
          <code>.table-row-bordered</code>&nbsp; or
          <code>.table-row-dashed</code>&nbsp; class to set border bottom style row cells. To change
          the row border color
          <code>.table-row-gray-{'{100-900}'}</code>&nbsp; classes can be used.
        </div>
        <div className='py-5 pb-6'>
          <table className='table table-row-bordered gy-7'>
            <thead>
              <tr className='fw-bolder fs-6 text-gray-800'>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='py-5'>
          <table className='table table-row-dashed table-row-gray-300 gy-7'>
            <thead>
              <tr className='fw-bolder fs-6 text-gray-800'>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock code={code3} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='striped-rows'>
          <a href='#cell-spacing'></a>Striped Rows
        </h1>
        <div className='py-5'>
          Use
          <code>.table-striped</code>&nbsp; to add zebra-striping to any table row within the
          <code>&lt;tbody&gt;</code>.
        </div>

        <div className='my-5'>
          <table className='table table-striped gy-7 gs-7'>
            <thead>
              <tr className='fw-bold fs-6 text-gray-800 border-bottom border-gray-200'>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock code={code4} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='striped-rounded-bordered'>
          <a href='#cell-spacing'></a>Striped, Rounded &amp; Bordered
        </h1>
        <div className='py-5'>
          Use
          <code>.border</code>&nbsp; and
          <code>.table-striped</code>&nbsp; to set bordered table with striped rows and make it
          rounded with
          <code>.table-rounded</code>.
        </div>
        <div className='my-5'>
          <table className='table table-rounded table-striped border gy-7 gs-7'>
            <thead>
              <tr className='fw-bold fs-6 text-gray-800 border-bottom border-gray-200'>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock code={code5} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='flush-table'>
          <a href='#cell-spacing'></a>Flush Table
        </h1>
        <div className='py-5'>
          Use
          <code>.table-flush</code>&nbsp; to reset the table and cells base styles so then style the
          cells individually.
        </div>
        <div className='my-5'>
          <table className='table table-rounded table-flush'>
            <thead>
              <tr className='fw-bold fs-7 text-danger border-bottom border-gray-200 py-4'>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr className='py-5 fw-bold border-bottom border-gray-300 fs-6'>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr className='py-5 fw-bolder border-bottom border-gray-400 fs-4'>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr className='py-5 fw-boldest border-bottom border-gray-500 fs-3'>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock code={code6} language='markup' />
      </div>
      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='hoverable-rows'>
          <a href='#hoverable-rows'></a>Hoverable Rows
        </h1>

        <div className='py-5'>
          Add
          <code>.table-hover</code>&nbsp; to enable a hover state on table rows within a
          &lt;tbody&gt;
        </div>
        <div className='my-5'>
          <table className='table table-hover table-rounded table-striped border gy-7 gs-7'>
            <thead>
              <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock code={code7} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='active-rows'>
          <a href='#active-rows'></a>Active Rows
        </h1>
        <div className='py-5'>
          Highlight a table row or cell by adding
          <code>.table-active</code>&nbsp; class:
        </div>
        <div className='my-5'>
          <table className='table table-rounded table-row-bordered border gy-7 gs-7'>
            <thead>
              <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr className='table-active'>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr className='table-active'>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock code={code8} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='nesting'>
          <a href='#nesting'></a>Nesting
        </h1>
        <div className='py-5'>
          Border styles, active styles, and table variants are not inherited by nested tables.
        </div>
        <div className='my-5'>
          <table className='table table-striped table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-7 gs-7'>
            <thead>
              <tr className='fw-bold fs-4 text-gray-800'>
                <th scope='col'>#</th>
                <th scope='col'>First</th>
                <th scope='col'>Last</th>
                <th scope='col'>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <table className='table table-row-dashed table-row-gray-500 gy-5 gs-5 mb-0'>
                    <thead>
                      <tr className='fw-bold fs-6 text-gray-800'>
                        <th scope='col'>Header</th>
                        <th scope='col'>Header</th>
                        <th scope='col'>Header</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>A</th>
                        <td>First</td>
                        <td>Last</td>
                      </tr>
                      <tr>
                        <th scope='row'>B</th>
                        <td>First</td>
                        <td>Last</td>
                      </tr>
                      <tr>
                        <th scope='row'>C</th>
                        <td>First</td>
                        <td>Last</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock code={code9} language='markup' />
      </div>

      <div className='py-10'>
        <h1 className='anchor fw-bolder mb-5' id='responsive-table'>
          <a href='#responsive-table'></a>Responsive Table
        </h1>
        <div className='py-5'>
          Enable a table with fixed cell widths and responsive modes by referring to the official{' '}
          <a href={`${REACT_APP_BOOTSTRAP_DOCS_LINK}/content/tables/`} className='fw-bolder me-1'>
            Bootstrap Tables
          </a>
          documentation.
        </div>
        <div className='my-5'>
          <div className='table-responsive'>
            <table className='table table-striped gy-7 gs-7'>
              <thead>
                <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                  <th className='min-w-200px'>Name</th>
                  <th className='min-w-400px'>Position</th>
                  <th className='min-w-100px'>Office</th>
                  <th className='min-w-200px'>Age</th>
                  <th className='min-w-200px'>Start date</th>
                  <th className='min-w-200px'>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>$170,750</td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009/01/12</td>
                  <td>$86,000</td>
                </tr>
                <tr>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012/03/29</td>
                  <td>$433,060</td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td>$162,700</td>
                </tr>
                <tr>
                  <td>Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>61</td>
                  <td>2012/12/02</td>
                  <td>$372,000</td>
                </tr>
                <tr>
                  <td>Herrod Chandler</td>
                  <td>Sales Assistant</td>
                  <td>San Francisco</td>
                  <td>59</td>
                  <td>2012/08/06</td>
                  <td>$137,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <CodeBlock code={code10} language='markup' />
      </div>
    </>
  )
}

const code = `<table className="table table-row-dashed table-row-gray-300 gy-7">
  <thead>
      <tr className="fw-bolder fs-6 text-gray-800">
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
      </tr>
      <tr>
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>63</td>
          <td>2011/07/25</td>
          <td>$170,750</td>
      </tr>
  </tbody>
</table>`

const code2 = `<table className="table gs-7 gy-7 gx-7">
  <thead>
      <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
      </tr>
      <tr>
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>63</td>
          <td>2011/07/25</td>
          <td>$170,750</td>
      </tr>
  </tbody>
</table>`

const code3 = `<div className="py-5">
  <table className="table table-row-dashed table-row-gray-300 gy-7">
      <thead>
          <tr className="fw-bolder fs-6 text-gray-800">
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
          </tr>
          <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
          </tr>
      </tbody>
  </table>
</div>

<div className="py-5">
  <table className="table table-row-dashed table-row-gray-300 gy-7">
      <thead>
          <tr className="fw-bolder fs-6 text-gray-800">
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
          </tr>
          <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
          </tr>
      </tbody>
  </table>
</div>`

const code4 = `<table className="table table-striped gy-7 gs-7">
  <thead>
      <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
      </tr>
      <tr>
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>63</td>
          <td>2011/07/25</td>
          <td>$170,750</td>
      </tr>
  </tbody>
</table>`

const code5 = `<table className="table table-rounded table-striped border gy-7 gs-7">
  <thead>
      <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
      </tr>
      <tr>
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>63</td>
          <td>2011/07/25</td>
          <td>$170,750</td>
      </tr>
  </tbody>
</table>`

const code6 = `<table className="table table-rounded table-flush">
  <thead>
      <tr className="fw-bold fs-7 text-danger border-bottom border-gray-200 py-4">
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
      </tr>
  </thead>
  <tbody>
      <tr className="py-5 fw-bold  border-bottom border-gray-300 fs-6">
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
      </tr>
      <tr className="py-5 fw-bolder  border-bottom  border-gray-400 fs-4">
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>63</td>
          <td>2011/07/25</td>
          <td>$170,750</td>
      </tr>
  </tbody>
</table>`

const code7 = `<table className="table table-hover table-rounded table-striped border gy-7 gs-7">
  <thead>
      <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
      </tr>
      <tr>
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>63</td>
          <td>2011/07/25</td>
          <td>$170,750</td>
      </tr>
  </tbody>
</table>`

const code8 = `<table className="table table-rounded table-row-bordered border gy-7 gs-7">
  <thead>
      <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
      </tr>
      <tr className="table-active">
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>63</td>
          <td>2011/07/25</td>
          <td>$170,750</td>
      </tr>
  </tbody>
</table>`

const code9 = `<table className="table table-striped table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-7 gs-7">
  <thead>
      <tr className="fw-bold fs-4 text-gray-800">
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <td colspan="4">
              <table className="table table-row-dashed table-row-gray-500 gy-5 gs-5 mb-0">
                  <thead>
                      <tr className="fw-bold fs-6 text-gray-800">
                          <th scope="col">Header</th>
                          <th scope="col">Header</th>
                          <th scope="col">Header</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th scope="row">A</th>
                          <td>First</td>
                          <td>Last</td>
                      </tr>
                      <tr>
                          <th scope="row">B</th>
                          <td>First</td>
                          <td>Last</td>
                      </tr>
                      <tr>
                          <th scope="row">C</th>
                          <td>First</td>
                          <td>Last</td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
  </tbody>
</table>`

const code10 = `<div className="table-responsive">
  <table className="table table-striped gy-7 gs-7">
      <thead>
          <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
              <th className="min-w-200px">Name</th>
              <th className="min-w-400px">Position</th>
              <th className="min-w-100px">Office</th>
              <th className="min-w-200px">Age</th>
              <th className="min-w-200px">Start date</th>
              <th className="min-w-200px">Salary</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
          </tr>
          <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
          </tr>
      </tbody>
  </table>
</div>`

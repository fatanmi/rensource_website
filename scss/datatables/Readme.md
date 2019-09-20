<h1 id="datatables-plug-in-for-jquery">DataTables plug-in for jQuery</h1>

<p>DataTables is a table enhancing plug-in for the <a href="//jquery.com">jQuery</a> Javascript library, adding sorting, paging and filtering abilities to plain HTML tables with minimal effort. The stated goal of DataTables is:</p>

<blockquote>
  <p>To enhance the accessibility of data in HTML tables.</p>
</blockquote>

<p>To meet this goal, DataTables is developed with two distinct groups of users in mind:</p>

<ul>
<li><p>You the developers using DataTables. For developers DataTables provides a wide array of options for how data should be obtained, displayed and acted upon, along with an extensive API for accessing and manipulating the table.</p></li>
<li><p>End users. For those using the interface DataTables presents, actions to get the most from the information contained in tables, such as sorting and filtering, along with paging and scrolling of the data in table, are easy to use, intuitive and fast.</p></li>
</ul>

<h2 id="installing-datatables">Installing DataTables</h2>

<p>To use DataTables, the primary way to obtain the software is to use the <a href="//datatables.net/download">DataTables downloader</a>. You can also include the individual files from the <a href="//cdn.datatables.net">DataTables CDN</a>. See the <a href="//datatables.net/manual/installation">documentation</a> for full details.</p>

<h3 id="npm-and-bower">NPM and Bower</h3>

<p>If you prefer to use a package manager such as NPM or Bower, distribution repositories are available with software built from this repository under the name <code>datatables.net</code>. Styling packages for Bootstrap, Foundation and other styling libraries are also available by adding a suffix to the package name.</p>

<p>Please see the DataTables <a href="//datatables.net/download/npm">NPM</a> and <a href="//datatables.net/download/bower">Bower</a> installation pages for further information. The <a href="//datatables.net/manual/installation">DataTables installation manual</a> also has details on how to use package managers with DataTables.</p>

<h2 id="usage">Usage</h2>

<p>In its simplest case, DataTables can be initialised with a single line of Javascript:</p>

<pre><code class="js">$('table').dataTable();
</code></pre>

<p>where the jQuery selector is used to obtain a reference to the table you want to enhance with DataTables. Optional configuration parameters can be passed in to DataTables to have it perform certain actions by using a configuration object as the parameter passed in to the DataTables constructor. For example:</p>

<pre><code class="js">$('table').dataTable( {
  paginate: false,
  scrollY: 300
} );
</code></pre>

<p>will disable paging and enable scrolling.</p>

<p>A full list of the options available for DataTables are available in the <a href="//datatables.net">documentation</a>.</p>

<h2 id="documentation">Documentation</h2>

<p>Full documentation of the DataTables options, API and plug-in interface are available on the <a href="//datatables.net">DataTables web-site</a>. The site also contains information on the wide variety of plug-ins that are available for DataTables, which can be used to enhance and customise your table even further.</p>

<h2 id="support">Support</h2>

<p>Support for DataTables is available through the <a href="//datatables.net/forums">DataTables forums</a> and <a href="//datatables.net/support">commercial support options</a> are available.</p>

<h2 id="license">License</h2>

<p>DataTables is release under the <a href="//datatables.net/license">MIT license</a>. You are free to use, modify and distribute this software, as long as the copyright header is left intact (specifically the comment block which starts with <code>/*!</code>.</p>

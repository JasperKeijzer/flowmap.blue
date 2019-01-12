import * as React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import styled from '@emotion/styled';

const examples = [
  { key: '1Z6dVVFFrdooHIs8xnJ_O7eM5bhS5KscCi7G_k0jUNDI', name: 'London bicycle hire' },
  { key: '1IQ0txD09cJ8wsQRSux5AoZfG6eIM-cx6RvVfszZ_ScE', name: 'NYC citibike' },
  { key: '1fhX98NFv5gAkkjB2YFCm50-fplFpmWVAZby3dmm9cgQ', name: 'Chicago taxis' },
]

const Outer = styled.div`
  padding: 10px 20px;
  & h1 { font-size: 2rem; }
  & li { margin: 0.5em 0; }
`

const Intro = () =>
  <Outer>
    <section className="intro">
      <h1><Logo fontSize={35} /></h1>

      <section>
        <p>
          This app can render a geographic flow map visualization
          from a spreadsheet published on
          {` `}<a href="https://docs.google.com/spreadsheets/">Google Sheets</a>.
        </p>
        <p>
          It can be used to visualize numbers of movements of people or goods
          between pairs of geographic locations (Origin-Destination data).
        </p>
      </section>

      <section>
        <h2>Examples</h2>
        <ul>
          {
            examples.map(({ key, name }) =>
              <li key={key}>
                <Link to={`/${key}`}>{name}</Link>
                {` `}
                (<a
                  href={`https://docs.google.com/spreadsheets/d/${key}`}
                  target="_blank" rel="noopener"
                >spreadsheet</a>)
              </li>
            )
          }
        </ul>
      </section>

      <section>
        <h2>Publish your own dataset</h2>
        <p>
          You can visualize your own dataset with the app:
        </p>
        <ol>
          <li>Create a new <a href="https://docs.google.com/spreadsheets/">Google Spreadsheet</a></li>
          <li>Add data to your spreadsheet.
            The spreadsheet must have two sheets in it named "<b>locations</b>" and "<b>flows</b>".
            The <b>locations</b> sheet must have these three columns: <b>id</b>, <b>lat</b>, <b>lon</b>.
            The <b>flows</b> sheet must have these three columns: <b>origin</b>, <b>dest</b>, <b>count</b>.
            The values in the <b>origin</b> and <b>dest</b> columns must reference the <b>id</b> values
            in the locations sheet.
            Make sure <b>not to enable number formatting</b> for the numeric columns or
            they won't be treated correctly.
          </li>
          <li>Publish your spreadsheet by going to "File" / "Publish to the web…"</li>
          {/*<li>Share the spreadsheet by going to "File" / "Share with others"*/}
            {/*(if you want your visualization to be publicly accessible on the web).*/}
            {/*Choose "Anyone with the link can view".*/}
            {/*</li>*/}
          <li>Copy the key of your spreadsheet from its URL. It comes right after docs.google.com/spreadsheets/d/</li>
          <li>Open{` `}
            <a href="http://flowmap.blue/YOUR_SPREADSHEET_KEY">
              https://flowmap.blue/YOUR_SPREADSHEET_KEY
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h2>Need help?</h2>
        <p>
          <a href="https://github.com/ilyabo/flowmap.blue/issues" target="_blank" rel="noopener">Submit an issue</a>{` or `}
          <a href="mailto:ilya@boyandin.me?subject=flowmap.blue">ask me</a>.
        </p>
      </section>
      <section>
        <h2>Credits</h2>
        <p>
          Developed by {` `}
          <a href="https://ilya.boyandin.me">Ilya Boyandin</a>  {` using `}
          <a href="https://github.com/teralytics/flowmap.gl">flowmap.gl</a>,{` `}
          <a href="http://deck.gl">deck.gl</a>,{` `}
          <a href="https://github.com/mapbox/mapbox-gl-js">mapbox</a>,{` `}
          <a href="https://d3js.org/">d3</a>
          {` and with the kind support from `}
          <a href="https://www.teralytics.net">Teralytics</a>.
        </p>
      </section>
    </section>

    <a href="https://github.com/ilyabo/flowmap.blue">
      <img
        style={{
          position: 'absolute', top: 0, right: 0, border: 0,
        }}
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
        alt="Fork me on GitHub" />
    </a>
  </Outer>


export default Intro

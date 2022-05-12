import * as React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <nav>
        <ol>
          <li>
            <Link to="/" activeClassName="active">Questback Essentials tutorials</Link>
          </li>
          <li>
            <Link to="/reports" activeClassName="active">Reports</Link>
          </li>
          <li>
            <Link to="/notifications" activeClassName="active">Notifications</Link>
          </li>
          <li>
            <Link to="/test-and-publish" activeClassName="active">Test and publish</Link>
          </li>
          <li>
            <Link to="/account-settings" activeClassName="active">Account settings</Link>
          </li>
          <li>
            <Link to="/designer" activeClassName="active">Designer</Link>
          </li>
          <li>
            <Link to="/distribution" activeClassName="active">Distribution</Link>
          </li>
          <li>
            <Link to="/filters" activeClassName="active">Filters</Link>
          </li>
          <li>
            <Link to="/follow-up" activeClassName="active">Follow-up</Link>
          </li>
          <li>
            <Link to="/languages" activeClassName="active">Languages</Link>
          </li>
          <li>
            <Link to="/quest-settings" activeClassName="active">Quest settings</Link>
          </li>
        </ol>
      </nav>
    </header>
  )
}
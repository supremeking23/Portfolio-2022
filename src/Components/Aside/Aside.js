import React from 'react';

export default function Aside() {
  return (
    <aside>
        <img src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/48430082_2970776282948161_8466770645236056064_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RjgikpBPBoQAX_nib-T&tn=TpWw3j3NdluYP9UQ&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT9Ua7sKVkUhi5RskF__Dt5hPcgKJPW-EphT0jtr47QZRw&oe=6295E4F9" alt="Ivan"/>
        <ul>
        <li className="active">
            <a href="/"><span>Projects</span></a>
        </li>
        <li>
            <a href="/certificate"><span>Certificates</span></a>
        </li>
        <li>
            <a href="/about"><span>About</span></a>
        </li>
        </ul>
    </aside>
  );
}

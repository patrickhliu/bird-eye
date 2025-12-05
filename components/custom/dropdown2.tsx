'use client';

interface Args {
   label: string,
   sendToParent: (x:string) => void,
}
// daisy-ui...

const dropdown:React.FC<Args> = ({ label, sendToParent }) => {
//const dropdown: React.FC<args> = ({ label }) => {
  return (
    <details className="dropdown">
        <summary className="btn m-1" onClick={ () => sendToParent(label) }>{ label }</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
    </details>
  )
}

export default dropdown;
'use client';

interface Args {
   label: string,
   episodes: string[],
   sendToParent: (x:string) => void,
}
// daisy-ui...

const dropdown:React.FC<Args> = ({ label, episodes, sendToParent }) => {
    //const dropdown: React.FC<args> = ({ label }) => {
  return (
    <details className="dropdown">
        <summary className="btn m-1 bg-blue-500" onClick={ () => sendToParent(label) }>{ label }</summary>
        <ul className="menu dropdown-content bg-blue-100 rounded-box z-1 w-52 p-2 shadow-sm" style={{ minHeight:"190px", overflowY :"scroll", overflowX:"hidden", position:"absolute", width:"75px", display: "contents" }}>
            {
                episodes.map(e => <li key={e} className="bg-red-100 m-2"> { e } </li>)
            }
        </ul>
    </details>
  )
}

export default dropdown;
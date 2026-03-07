import React , {useState , useEffect} from "react";
import "./Home.css"
export default function Home() {
  //initialize code js

  //1 Constant
  const name = "fawzi";
  //const [name,setName] = useState("fawzi")
  const age = 45;
  const note = 15.5;
  const username = <h5>Njah</h5>;

  //object
  const etudiant = {
    nom: "Mohamed Aziz",
    prenom: "Ben Ismail",
    age: 26,
  };

  //function
  function getData(data) {
    return data;
  }

  function getUser(object) {
    return object.nom + " " + object.prenom + " " + object.age;
  }

  //list de object
  const listeEtudiant = [
    { nom: "dorra", prenom: "labidi", age: 55, objectID: 0 },
    { nom: "aziz", prenom: "Ben Ismail", age: 24, objectID: 1 },
    { nom: "thoraya", prenom: "dhawedi", age: 55, objectID: 2 },
    { nom: "islem", prenom: "slema", age: 55, objectID: 3 },
  ];

  const codecss = {
    color : "#02f567",
    fontSize : "26px"
  }

  //Hook
  //const count = 0 ;
  const [count,setCount]= useState(0)
  const [data,setData] = useState(".")

  //useEffect(,)
    // useEffect(() => {
    // console.log('cette fonction va etre execute chaque re-render');
    // console.log('car pas de deuxieme argument passer');
    // });

  //useEffect(,[])
//     useEffect(() => {
//     console.log('cette fonction va etre execute une fois seulement ');
//     console.log('car le deuxieme argument est un tableau vide ');
//     return () => {
//     console. log(' cette partie va etre execute seulement lors de loperation unmounting ')
//     }
//   }, [])

  //useEffect(,[x])
  useEffect(() => {
     console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable count ');
     console.log('car le deuxieme argument est count ');
     return () => {
     console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
     }
     }, [count]);
  return (
    <div>
      {/* jsx => html + js */}
      {/* 1 Constant */}
      <h5>
        hello {name}
        {/* <br/> => <br> </br> */}
        <br />
        age : {age} <br /> Note : {note} {username}
      </h5>
      <hr />
      {/* object */}
      {etudiant.nom} {etudiant.prenom} {etudiant.age}
      {/* function */}
      <br />
      {getData("Mrahbe bikom")}
      {getUser(etudiant)}
      {/* list object */}
      <table border={2}>
        <thead>
          <caption>Liste Object</caption>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
            {listeEtudiant.map((item) =>(
          <tr key={item.objectID}>
            <td>{item.nom}</td>
            <td>{item.prenom}</td>
            <td>{item.age}</td>
          </tr>
          ))}
        </tbody>
      </table>

      <div className="code" style={codecss}>hello</div>
      {count}<br/>
      <button onClick={()=>setCount(count + 1)}>Add + 1</button>
    <br/>{data}<br/>
    <input onChange={(e)=>setData(e.target.value)}></input>
    </div>
  );
}

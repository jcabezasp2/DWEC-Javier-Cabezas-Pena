ReactDOM.render(<App/>, document.getElementById('root'));

function App(){
  
  return (
  <>
      <UserCard
        name="Algo algo"
        amount={1000}
        worker={true}
        points={[99,33,22]}
        avatar="https://www.pngarts.com/files/3/Avatar-PNG-Pic.png"
        address={{street: '123 Main street', city: 'NY'}}
        greet = {function (){alert("hola")}}
        />
  </>
  );
}


function UserCard(props){
  
  return ( <div>
            <div> 
              <img/>
            <div>
    
            <h5>{props.name}</h5>  
    
            <p></p>
      
            <ul>
              
            </ul>
    </div>);
}
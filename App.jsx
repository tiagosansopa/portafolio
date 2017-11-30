import React from 'react'
let slide1 = []
let slide2 =[]
export default class App extends React.Component{
	
	constructor(props) {
		super(props)
		
		this.state = {
			state1 : 0
		}
	}
	renderDisplay() {
		this.state = {}
	}
	
	checkstate(){
		if(this.state.state1===0){
			slide1.pop()
			slide1.push(<Descripcion/>)
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.push(<Proyectos t1='Casa con CSS puro' t2="Aqui diseñe una bonita casa y aprendi a usar gradientes en las imagenes." t3='Me gusto mucho esta actividad. Interesante aprender que esto se renderiza muy facil y se pueden diseñar facilmente' url="casa.png"/>)
			slide2.push(<Proyectos t1='Memoria' t2='La mememoria que se desarrollo. Aqui practique los conocimientos de manipulacion del DOM con js.' t3='Tenia un bug en esto. Tenia problemas con el timeout pero lo disfrute mucho.'url='memoria.png'/>)
			slide2.push(<Proyectos t1='Chat' t2="Este chat a mi me sirvio para aprender como funcionaba el protocolo para ir por informacion del servidor. Como parsear y desplegar un json. Tambien como mantener una conexion abierta para poder recibir datos en tiempo real." t3=' Muy bueno. El diseño me gusto mucho.' url="chat.png"/>)
			slide2.push(<Proyectos t1='Laberinto' t2='Aqui capture los eventos del teclado. Aprendi a usar react. Muy util y facil. Me gusta mucho la practicidad para poder enviar datos a modelos ya creados. Los componentes que solo les agrego la info necesaria.' t3='Me gusto mucho como quedo este laboratorio. Mi favorito.' rating='36' url='laberinto.png'/>)	
			slide2.push(<Proyectos t1='Redux' t2="En este estaba basado en el ejemplo subido. Es util poder renderizar solo un elemento. Aun no soy experto en el tema" t3='Necesito practicar' url="redux.png"/>)
			slide2.push(<Proyectos t1='Proyecto de Página de Airbnb' t2='Duplique la pagina de Airbnb con el cambio de estado de moverme por las opciones que mostraba la pagina principal.' t3='Muy orgulloso de esto. Me tomo mucho tiempo. No quedo perfecta pero si tiene mucha similitud.'url='p1.png'/>)
			slide2.push(<Proyectos t1='Calculadora' t2="El desarrollo de la calculadora para realizar las pruebas de linting y testing" t3=' Interesante. Necesite ayuda no soy un experto en este tema' url="mini.png"/>)
			slide2.push(<Proyectos t1='Portafolio' t2='Reflexion sobre el curso. Me gusto mucho el curso. Me gusto mucho toda la parte de teoria del inicio. Resolvi muchas dudas que siempre tuve. Incluso me gusto el diseño de interfaces de usuario, algo que no me habia gustado nunca.' t3='Me gusta mucho TRON' rating='36' url='tron.png'/>)			
			this.setState({state1:1})
		}
		else if(this.state.state1===1){
			slide1.pop()
			slide1.push(<Sant/>)
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()

		slide2.push(<Proyectos t1='Redux' t2="En este estaba basado en el ejemplo subido. Es util poder renderizar solo un elemento. Aun no soy experto en el tema" t3='Necesito practicar' url="redux.png"/>)
			slide2.push(<Proyectos t1='Calculadora' t2="El desarrollo de la calculadora para realizar las pruebas de linting y testing" t3=' Interesante. Necesite ayuda no soy un experto en este tema' url="mini.png"/>)
		slide2.push(<Proyectos t1='Proyecto de Página de Airbnb' t2='Duplique la pagina de Airbnb con el cambio de estado de moverme por las opciones que mostraba la pagina principal.' t3='Muy orgulloso de esto. Me tomo mucho tiempo. No quedo perfecta pero si tiene mucha similitud.'url='p1.png'/>)	
	slide2.push(<Proyectos t1='Chat' t2="Este chat a mi me sirvio para aprender como funcionaba el protocolo para ir por informacion del servidor. Como parsear y desplegar un json. Tambien como mantener una conexion abierta para poder recibir datos en tiempo real." t3=' Muy bueno. El diseño me gusto mucho.' url="chat.png"/>)
			slide2.push(<Proyectos t1='Laberinto' t2='Aqui capture los eventos del teclado. Aprendi a usar react. Muy util y facil. Me gusta mucho la practicidad para poder enviar datos a modelos ya creados. Los componentes que solo les agrego la info necesaria.' t3='Me gusto mucho como quedo este laboratorio. Mi favorito.' rating='36' url='laberinto.png'/>)	
			slide2.push(<Proyectos t1='Memoria' t2='La mememoria que se desarrollo. Aqui practique los conocimientos de manipulacion del DOM con js.' t3='Tenia un bug en esto. Tenia problemas con el timeout pero lo disfrute mucho.'url='memoria.png'/>)
			slide2.push(<Proyectos t1='Casa con CSS puro' t2="Aqui diseñe una bonita casa y aprendi a usar gradientes en las imagenes." t3='Me gusto mucho esta actividad. Interesante aprender que esto se renderiza muy facil y se pueden diseñar facilmente' url="casa.png"/>)	
	slide2.push(<Proyectos t1='Portafolio' t2='Reflexion sobre el curso. Me gusto mucho el curso. Me gusto mucho toda la parte de teoria del inicio. Resolvi muchas dudas que siempre tuve. Incluso me gusto el diseño de interfaces de usuario, algo que no me habia gustado nunca.' t3='Me gusta mucho TRON' rating='36' url='tron.png'/>)			
			this.setState({state1:2})
		}	
		else if(this.state.state1===2){
			slide1.pop()
			slide1.push(<Vida/>)
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.push(<Proyectos t1='Casa con CSS puro' t2="Aqui diseñe una bonita casa y aprendi a usar gradientes en las imagenes." t3='Me gusto mucho esta actividad. Interesante aprender que esto se renderiza muy facil y se pueden diseñar facilmente' url="casa.png"/>)
			slide2.push(<Proyectos t1='Memoria' t2='La mememoria que se desarrollo. Aqui practique los conocimientos de manipulacion del DOM con js.' t3='Tenia un bug en esto. Tenia problemas con el timeout pero lo disfrute mucho.'url='memoria.png'/>)
			slide2.push(<Proyectos t1='Chat' t2="Este chat a mi me sirvio para aprender como funcionaba el protocolo para ir por informacion del servidor. Como parsear y desplegar un json. Tambien como mantener una conexion abierta para poder recibir datos en tiempo real." t3=' Muy bueno. El diseño me gusto mucho.' url="chat.png"/>)
			slide2.push(<Proyectos t1='Laberinto' t2='Aqui capture los eventos del teclado. Aprendi a usar react. Muy util y facil. Me gusta mucho la practicidad para poder enviar datos a modelos ya creados. Los componentes que solo les agrego la info necesaria.' t3='Me gusto mucho como quedo este laboratorio. Mi favorito.' rating='36' url='laberinto.png'/>)	
			slide2.push(<Proyectos t1='Redux' t2="En este estaba basado en el ejemplo subido. Es util poder renderizar solo un elemento. Aun no soy experto en el tema" t3='Necesito practicar' url="redux.png"/>)
			slide2.push(<Proyectos t1='Proyecto de Página de Airbnb' t2='Duplique la pagina de Airbnb con el cambio de estado de moverme por las opciones que mostraba la pagina principal.' t3='Muy orgulloso de esto. Me tomo mucho tiempo. No quedo perfecta pero si tiene mucha similitud.'url='p1.png'/>)
			slide2.push(<Proyectos t1='Calculadora' t2="El desarrollo de la calculadora para realizar las pruebas de linting y testing" t3=' Interesante. Necesite ayuda no soy un experto en este tema' url="mini.png"/>)
			slide2.push(<Proyectos t1='Portafolio' t2='Reflexion sobre el curso. Me gusto mucho el curso. Me gusto mucho toda la parte de teoria del inicio. Resolvi muchas dudas que siempre tuve. Incluso me gusto el diseño de interfaces de usuario, algo que no me habia gustado nunca.' t3='Me gusta mucho TRON' rating='36' url='tron.png'/>)			
			this.setState({state1:3})
		}	
		else if(this.state.state1===3){
			slide1.pop()
			slide1.push(<Proyectos/>)
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			
		
			
		slide2.push(<Proyectos t1='Chat' t2="Este chat a mi me sirvio para aprender como funcionaba el protocolo para ir por informacion del servidor. Como parsear y desplegar un json. Tambien como mantener una conexion abierta para poder recibir datos en tiempo real." t3=' Muy bueno. El diseño me gusto mucho.' url="chat.png"/>)		
			slide2.push(<Proyectos t1='Calculadora' t2="El desarrollo de la calculadora para realizar las pruebas de linting y testing" t3=' Interesante. Necesite ayuda no soy un experto en este tema' url="mini.png"/>)
slide2.push(<Proyectos t1='Laberinto' t2='Aqui capture los eventos del teclado. Aprendi a usar react. Muy util y facil. Me gusta mucho la practicidad para poder enviar datos a modelos ya creados. Los componentes que solo les agrego la info necesaria.' t3='Me gusto mucho como quedo este laboratorio. Mi favorito.' rating='36' url='laberinto.png'/>)			
		slide2.push(<Proyectos t1='Casa con CSS puro' t2="Aqui diseñe una bonita casa y aprendi a usar gradientes en las imagenes." t3='Me gusto mucho esta actividad. Interesante aprender que esto se renderiza muy facil y se pueden diseñar facilmente' url="casa.png"/>)
			slide2.push(<Proyectos t1='Redux' t2="En este estaba basado en el ejemplo subido. Es util poder renderizar solo un elemento. Aun no soy experto en el tema" t3='Necesito practicar' url="redux.png"/>)
	
		slide2.push(<Proyectos t1='Proyecto de Página de Airbnb' t2='Duplique la pagina de Airbnb con el cambio de estado de moverme por las opciones que mostraba la pagina principal.' t3='Muy orgulloso de esto. Me tomo mucho tiempo. No quedo perfecta pero si tiene mucha similitud.'url='p1.png'/>)
			slide2.push(<Proyectos t1='Portafolio' t2='Reflexion sobre el curso. Me gusto mucho el curso. Me gusto mucho toda la parte de teoria del inicio. Resolvi muchas dudas que siempre tuve. Incluso me gusto el diseño de interfaces de usuario, algo que no me habia gustado nunca.' t3='Me gusta mucho TRON' rating='36' url='tron.png'/>)			
	slide2.push(<Proyectos t1='Memoria' t2='La mememoria que se desarrollo. Aqui practique los conocimientos de manipulacion del DOM con js.' t3='Tenia un bug en esto. Tenia problemas con el timeout pero lo disfrute mucho.'url='memoria.png'/>)		
		this.setState({state1:4})
		}	
		
		else if(this.state.state1===4){
			slide1.pop()
			slide1.push(<Descripcion/>)
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
			slide2.pop()
						slide2.push(<Proyectos t1='Portafolio' t2='Reflexion sobre el curso. Me gusto mucho el curso. Me gusto mucho toda la parte de teoria del inicio. Resolvi muchas dudas que siempre tuve. Incluso me gusto el diseño de interfaces de usuario, algo que no me habia gustado nunca.' t3='Me gusta mucho TRON' rating='36' url='tron.png'/>)			
			slide2.push(<Proyectos t1='Memoria' t2='La mememoria que se desarrollo. Aqui practique los conocimientos de manipulacion del DOM con js.' t3='Tenia un bug en esto. Tenia problemas con el timeout pero lo disfrute mucho.'url='memoria.png'/>)	
			slide2.push(<Proyectos t1='Laberinto' t2='Aqui capture los eventos del teclado. Aprendi a usar react. Muy util y facil. Me gusta mucho la practicidad para poder enviar datos a modelos ya creados. Los componentes que solo les agrego la info necesaria.' t3='Me gusto mucho como quedo este laboratorio. Mi favorito.' rating='36' url='laberinto.png'/>)	

		slide2.push(<Proyectos t1='Calculadora' t2="El desarrollo de la calculadora para realizar las pruebas de linting y testing" t3=' Interesante. Necesite ayuda no soy un experto en este tema' url="mini.png"/>)	
			slide2.push(<Proyectos t1='Casa con CSS puro' t2="Aqui diseñe una bonita casa y aprendi a usar gradientes en las imagenes." t3='Me gusto mucho esta actividad. Interesante aprender que esto se renderiza muy facil y se pueden diseñar facilmente' url="casa.png"/>)		
		slide2.push(<Proyectos t1='Proyecto de Página de Airbnb' t2='Duplique la pagina de Airbnb con el cambio de estado de moverme por las opciones que mostraba la pagina principal.' t3='Muy orgulloso de esto. Me tomo mucho tiempo. No quedo perfecta pero si tiene mucha similitud.'url='p1.png'/>)	
			slide2.push(<Proyectos t1='Redux' t2="En este estaba basado en el ejemplo subido. Es util poder renderizar solo un elemento. Aun no soy experto en el tema" t3='Necesito practicar' url="redux.png"/>)
		
			
	slide2.push(<Proyectos t1='Chat' t2="Este chat a mi me sirvio para aprender como funcionaba el protocolo para ir por informacion del servidor. Como parsear y desplegar un json. Tambien como mantener una conexion abierta para poder recibir datos en tiempo real." t3=' Muy bueno. El diseño me gusto mucho.' url="chat.png"/>)		
			
			this.setState({state1:0})
		}
	}
	

	render() {
	
	return (
      <div>
		<Mainbar/>
	    <Sant/> 
		<img src="next.png" onClick = { this.checkstate.bind(this)} style={{cursor: 'pointer',position:"absolute",top:"50%",right:"25px",zIndex:'9998'}}  ></img>
		<div style={{height:'301px',margin: '20px 20px'}}>
			{slide1}
		</div>
		<div onClick = { this.checkstate.bind(this)} style={{webkitBoxSizing: 'content-box',
  mozBoxSizing: 'content-box',
  position:"absolute",
  top:"680px",
  left:"30%",
  boxSizing: 'content-box',
  cursor: 'pointer',
  border: 'none',
  font: 'normal normal bold 70px/normal "Bad Script", Helvetica, sans-serif',
  color: 'rgba(0, 0, 0, 0)',
  textAlign: 'center',
  oTextOverflow: 'clip',
  textOverflow: 'clip',
  textShadow: '3px 0 0 rgb(217,31,38) , 6px 0 0 rgb(226,91,14) , 9px 0 0 rgb(245,221,8) , 12px 0 0 rgb(5,148,68) , 15px 0 0 rgb(2,135,206) , 18px 0 0 rgb(4,77,145) , 21px 0 0 rgb(42,21,113)',
  webkitTransition: 'all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  mozTransition: 'all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  oTransition: 'all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  transition: 'all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'}}>
		     Feliz Navidad!! 
		</div>

		<div style={{position:"absolute",top:"850px",height:'801px',marginTop: '1px',marginBottom: '10px'}}>
			{slide2}
		</div>
		
		
		</div>
		);
	}
}



class Mainbar extends React.Component{
	render(){
	const style = {
		 height: '100%',
		 width: '100%',
         border: '1px solid #F8F8F8',
		 backgroundColor: 'black',
		 border: '2px solid #F8F8F8',
		 top: '50px',
		 left: '100px',
		 zIndex: '9999',
		 display:'inline-block',
		backgroundImage: 'url("tron.png")'
	 }
	 const nombre1= {
		display: 'inline-block',
		webkitBoxSizing: 'border-box',
		mozBoxSizing: 'border-box',
		boxSizing: 'border-box',
		backgroundColor:'black',
		padding: '10px',
		border: 'none',
		font: 'normal 48px/normal "Warnes", Helvetica, sans-serif',
		color: 'rgba(255,255,255,1)',
		textDecoration: 'normal',
		textAlign: 'center',
		oTextOverflow: 'clip',
		textOverflow: 'clip',
		position: 'absolute',
		top: '100px',
		left: '150px',
		whiteSpace: 'pre',
		textShadow: '0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #0400ff , 0 0 70px #00e5ff , 0 0 80px #01010f , 0 0 100px #10197c',
		webkitTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)',
		mozTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)',
		oTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)',
		transition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)'
	 }	
const nombre2= {
		display: 'inline-block',
		webkitBoxSizing: 'border-box',
		mozBoxSizing: 'border-box',
		boxSizing: 'border-box',
		backgroundColor:'black',
		padding: '10px',
		border: 'none',
		font: 'normal 48px/normal "Warnes", Helvetica, sans-serif',
		color: 'rgba(255,255,255,1)',
		textDecoration: 'normal',
		textAlign: 'center',
		oTextOverflow: 'clip',
		textOverflow: 'clip',
		position: 'absolute',
		top: '180px',
		left: '150px',
		whiteSpace: 'pre',
		textShadow: '0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #0400ff , 0 0 70px #00e5ff , 0 0 80px #01010f , 0 0 100px #10197c',
		webkitTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)',
		mozTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)',
		oTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)',
		transition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)'
	 }		 
	 const nombre3= {
		display: 'inline-block',
		webkitBoxSizing: 'border-box',
		mozBoxSizing: 'border-box',
		boxSizing: 'border-box',
		backgroundColor:'black',
		padding: '10px',
		border: 'none',
		font: 'normal 48px/normal "Warnes", Helvetica, sans-serif',
		color: 'rgba(255,255,255,1)',
		textDecoration: 'normal',
		textAlign: 'center',
		oTextOverflow: 'clip',
		textOverflow: 'clip',
		position: 'absolute',
		top: '260px',
		left: '150px',
		whiteSpace: 'pre',
		textShadow: '0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #0400ff , 0 0 70px #00e5ff , 0 0 80px #01010f , 0 0 100px #10197c',
		webkitTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)',
		mozTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)',
		oTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)',
		transition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1)'
	 }	
	 return (
		<div style={style}> 
			<div style={nombre1}>
				Santiago Solórzano 
			</div>
			<div style={nombre2}>
				WEB 2017
			</div>
			<div style={nombre3}>
				Portafolio
			</div>
		</div>
		);
	}
}


class Sant extends React.Component{
	render(){
	const style = {
		 height: '570px',
		 width: '565px',
		 backgroundImage: 'url("santiago.jpg")',
		 backgroundSize: 'contain',
		 webkitBoxShadow: '0px 0px 60px 0px rgba(0, 255, 0, 0.67)',
		mozBoxShadow: '0px 0px 80px 0px rgba(0, 255, 0, 0.67)',
		boxShadow: '0px 0px 300px 0px rgba(0, 255, 0, 0.67)',
		position: "absolute",
		top: "50px",
		right:"100px"	
	 }
	 	 
	 return (
	 <div style={style}></div>
	 );
	}
}

class Vida extends React.Component{
	render(){
	const style = {
		 height: '570px',
		 width: '565px',
		 backgroundImage: 'url("santiago.jpg")',
		 backgroundSize: 'contain',
		 webkitBoxShadow: '0px 0px 60px 0px rgba(255, 0, 0, 0.9)',
		mozBoxShadow: '0px 0px 80px 0px rgba(255, 0, 0, 0.0.9)',
		boxShadow: '0px 0px 300px 0px rgba(255, 0, 0, 0.9)',
		position: "absolute",
		top: "50px",
		right:"100px"	
	 }
	 	 
	 return (
	 <div>
	 <div style={style}></div>)
	 </div>);
	}
}



class Proyectos extends React.Component{
	
	constructor(props) {
		super(props)
		this.state = {
			number: 0
		}
	}
	
	render(){
	const style = {
		display:'inline-block',
		 height: '401px',
		 width: '302px',
		 borderRadius: '20px',
		 position:'relative',
		 margin: '0 5px',
	 }
	 
	 const fotos = {
		 height: '201px',
		 width: '302px',
		 backgroundSize: 'contain',
		 backgroundImage: 'url(' + this.props.url + ')',
 webkitBoxShadow: '0px 0px 60px 0px rgba(0, 0, 255, 0.8)',
		mozBoxShadow: '0px 0px 80px 0px rgba(0, 0, 255, 0.9)',
		boxShadow: '0px 0px 300px 0px rgba(0, 0, 255, 0.67)',		 
		 
	 }
	 
	 const info = {
		 height: '300x',
		 width: '302px',
		 align:'right',
		 backgroundColor: 'white',
		 position: 'absolute',
		 top: '201px',
		 left: '0px'
	 }
	 
	 const sub1 = {
		 fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
		 fontSize: '12px',
		 color: 'rgb(210, 148, 42)', 
		 fontWeight: '700',
		 letterSpacing: '0.4px',
		 textTransform: 'uppercase', 	
         paddingTop: '0px',
		 paddingBottom: '0px', 
		 webkitBoxShadow: '0px 0px 60px 0px rgba(0, 255, 0, 0.67)',
		mozBoxShadow: '0px 0px 80px 0px rgba(0, 255, 0, 0.67)',
		boxShadow: '0px 0px 300px 0px rgba(0, 255, 0, 0.67)',
	 }
	 
	 const sub2 = {
		 fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
		 fontSize: '12px',
		 color: '#484848', 
		 fontWeight: '700',
		 letterSpacing: '0.4px',
		 textTransform: 'uppercase',
		 marginBottom: '4px', 	
         paddingTop: '0px',
		 paddingBottom: '0px',
         webkitBoxShadow: '0px 0px 60px 0px rgba(255, 0, 0, 0.9)',
		mozBoxShadow: '0px 0px 80px 0px rgba(255, 0, 0, 0.0.9)',
		boxShadow: '0px 0px 300px 0px rgba(255, 0, 0, 0.9)',		 
	 }
	 
	 const sub3 = {
		 fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
		 fontSize: '15px',
		 color: '#484848', 
		 fontWeight: '300',
		 letterSpacing: '0.2px',
		 lineHeight: '18px',
		 paddingTop: '0px',
		 paddingBottom: '0px'
	 }
	 
	 const sub4 = {
		 fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
		 fontSize: '14px',
		 color: '#484848',
		 letterSpacing: '0.4px',
		 lineHeight: '1.43px'
	 }
	 
	 return (
		<div style={style}> 
			<div style={fotos}></div>
			<div style={info}> 
				<p style={sub1}>{this.props.t1}</p> 
				<p style={sub2}>{this.props.t2}</p> 
				<p style={sub3}>{this.props.t3}</p> 
			</div>
		</div>
		);
	}
}


class Descripcion extends React.Component{
	render(){
	const style = {
		 height: '570px',
		 width: '565px',
		 backgroundImage: 'url("santiago.jpg")',
		 backgroundSize: 'contain',
		 webkitBoxShadow: '0px 0px 60px 0px rgba(0, 255, 0, 0.67)',
		mozBoxShadow: '0px 0px 80px 0px rgba(0, 255, 0, 0.67)',
		boxShadow: '0px 0px 300px 0px rgba(0, 255, 0, 0.67)',
		position: "absolute",
		top: "50px",
		right:"100px"	
	 }
	 	 
	 return (
	 <div>
	 <div style={style}></div>)
	 </div>);
	}
}

class Destinos extends React.Component{
	
	constructor(props) {
		super(props)
		this.state = {
			number: 0
		}
	}
	
	render(){
	const style = {
		display:'inline-block',
		 height: '354px',
		 width: '213px',
		 borderRadius: '20px',
		 position:'relative',
		 margin: '0 5px'
	 }
	 
	 const fotos = {
		 height: '296px',
		 width: '197px',
		 backgroundSize: 'contain',
		 backgroundImage: 'url(' + this.props.url + ')'	 
	 }
	 
	 const info = {
		 height: '58x',
		 width: '16px',
		 align:'right',
		 backgroundColor: 'white',
		 position: 'absolute',
		 top: '201px',
		 left: '0px'
	 }
	 
	 const sub1 = {
		 fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
		 fontSize: '12px',
		 color: 'rgb(210, 148, 42)', 
		 fontWeight: '700',
		 letterSpacing: '0.4px',
		 textTransform: 'uppercase', 	
		 paddingTop: '0px',
		 paddingBottom: '0px' 
	 }
	 
	 return (
		<div style={style}> 
			<div style={fotos}></div>
			<div style={info}> 
				<p style={sub1}>{this.props.t1}</p> 
			</div>
		</div>
		);
	}
}


class DownBar extends React.Component{
	render(){
	const style = {
		 height: '413px',
		 width: '100%',
         border: '1px solid #F8F8F8',
		 backgroundColor: 'rgb(249,249,249)',
		 border: '2px solid #F8F8F8',
		 display:'inline-block'
	 }
	 
	 const fotos = {
		 height: '72px',
		 width: '96px',
		 align:'left',
		 backgroundSize: 'contain',
         backgroundImage: 'url(' + this.props.url + ')' 		 
	 }
	 
	 const contenedor = {
		 height: '72px',
		 width: '184px',
		 align:'right',
		 backgroundColor: 'white',
		 position: 'absolute',
		 top: '0px',
		 left: '95px'
	 }
	 
	 const titulos = {
		 fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
		 fontSize: '15px',
		 color: '#484848', 
		 fontWeight: '700',
		 position: 'absolute',
		 top: '13%',
		 right: '40%'
	 }
	 
	 return (
		<div style={style}> 
			DOWNBARRRRRRRRRRR
		</div>
		);
	}
}




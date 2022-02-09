import React from 'react'

export default function About(props) {



    // DARK MODE FOR ONLY ABOUT.JS PART
    // const [display, setdisplay] = useState({
    //     color : 'white',
    //     background : 'black'
    // })
    
    // const viewl = ()=>{
    //     setdisplay({
    //         color : 'black',
    //         background : 'white'
    //     })
    // }
    // const viewd = ()=>{
    //     setdisplay({
    //         color : 'white',
    //         background : 'black'
    //     })
    // }


    return (
        <div>
            <div className="accordion"   id="accordionExample" style={{backgroundColor: props.mode==="dark"?"#312f2f": "white"}}>
  <div className="accordion-item" style={{backgroundColor: props.mode==="dark"?"#312f2f": "white"}}>
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button"  style={{backgroundColor: props.mode==="dark"?"#312f2f": "white", color: props.mode=== "dark"?"green":"black"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"  style={{backgroundColor: props.mode==="dark"?"#312f2f": "white", color: props.mode=== "dark"?"white":"black"}}>
      <div className="accordion-body"  >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={{backgroundColor: props.mode==="dark"?"#312f2f": "white", color: props.mode=== "dark"?"green":"black"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"  style={{backgroundColor: props.mode==="dark"?"#312f2f": "white", color: props.mode=== "dark"?"white":"black"}}>
      <div className="accordion-body"  >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  style={{backgroundColor: props.mode==="dark"?"#312f2f": "white", color: props.mode=== "dark"?"green":"black"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"  style={{backgroundColor: props.mode==="dark"?"#312f2f": "white", color: props.mode=== "dark"?"white":"black"}}>
      <div class="accordion-body"  >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button type="button" className="btn btn-light mx-3" onClick={viewl}>Light</button>
<button type="button" className="btn btn-dark mx-3" onClick={viewd}>Dark</button> */}
        </div>
    )
}

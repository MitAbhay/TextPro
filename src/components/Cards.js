import React from 'react'

export default function Cards(props) {
    return (
        <div>
            <div class="card mb-1s text-center my-4 border-success" style={{ alignItems: 'center',backgroundColor: props.mode==="dark"?"#312f2f": "white"}}>
                <div class="card-body w-25">
                    <h5 class="card-title text-success fs-2">Uppercase Letters</h5>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Uppercase letters are also known as capital letters. Uppercase letters signal to the reader that something is important or significant.

                        English alphabet uppercase letters: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z.</p>
                </div>
            </div>
            <div class="card text-center my-4 border-success"  style={{ alignItems: 'center',backgroundColor: props.mode==="dark"?"#312f2f": "white"}}>
                <div class="card-body w-25">
                    <h5 class="card-title text-success fs-2">Lowercase Letters</h5>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>In writing, most letters are lowercase. Lowercase letters are all letters that do not begin a sentence or refer to a proper noun.

                        English alphabet lowercase letters: a b c d e f g h i j k l m n o p q r s t u v w x y z.</p>
                </div>

            </div>
            <div class="card text-center my-4 border-success"  style={{ alignItems: 'center',backgroundColor: props.mode==="dark"?"#312f2f": "white"}}>
                <div class="card-body w-25">
                    <h5 class="card-title text-success fs-2">New Function</h5>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Coming soon.............</p>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Coming soon.............</p>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Coming soon.............</p>
                   

                </div>

            </div>
            <div class="card text-center my-4 border-success"  style={{ alignItems: 'center',backgroundColor: props.mode==="dark"?"#312f2f": "white"}}>
                <div class="card-body w-25">
                <h5 class="card-title text-success fs-2">New Function</h5>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Coming soon.............</p>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Coming soon.............</p>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Coming soon.............</p>
                </div>

            </div>
            <div class="card text-center my-4 border-success"  style={{ alignItems: 'center',backgroundColor: props.mode==="dark"?"#312f2f": "white"}}>
                <div class="card-body w-25">
                <h5 class="card-title text-success fs-2">New Function</h5>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Coming soon.............</p>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Coming soon.............</p>
                    <p class="card-text" style={{color: props.mode=== "dark"?"white":"black"}}>Coming soon.............</p>
                </div>

            </div>
        </div>
    )
}


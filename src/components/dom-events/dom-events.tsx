import classes from './dom-events.module.scss'
import {useEffect} from "react";

function DomEvents() {

    useEffect(() => {
            const controller = new AbortController()
            const button = document.getElementById("button");

            button?.addEventListener('click', (e) => {
                console.log("Button clicked");
                e.stopImmediatePropagation()
                //e.stopPropagation()
            })

            button?.addEventListener('click', () => {
                console.log("Button clicked 2");
            })

            return () => {
                controller.abort()
            }
        }
        , [])


    return (
        <div className={classes.parent1} onClickCapture={() => {
            console.log('clicked Parent-1');
        }}>
            <p onClick={() => {
                console.log('clicked Parent-1-p');
            }}>Parent-1</p>
            <div className={classes.parent2} onClick={() => {
                console.log('clicked Parent-2');
            }}>
                <p onClick={() => {
                    console.log('clicked Parent-2-p');
                }}>Parent-2</p>
                <div className={classes.parent3} onClick={() => {
                    console.log('clicked Parent-3');
                }}>
                    <p onClick={() => {
                        console.log('clicked Parent-3-p');
                    }}>Parent-3</p>
                    <div className={classes.parent4} onClick={() => {
                        console.log('clicked Parent-4');
                    }}>
                        <p onClick={() => {
                            console.log('clicked Parent-4-p');
                        }}>Parent-4</p>
                        <button id='button' className={classes.button}>
                            Click me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomEvents;
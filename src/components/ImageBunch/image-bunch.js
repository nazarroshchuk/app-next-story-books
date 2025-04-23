import Image from "next/image";

import './image-bunch.css'

function ImageBunch() {
    return (
        <div className={`ImageBunch`}>
            <div className={`ImageBunch__image`}>
                <Image src={'/images/20241224 shot 1.jpeg'} alt={''} width={100} height={100}/>
            </div>
            <div className={`ImageBunch__image`}>
                <Image src={'/images/20241224 shot 1.jpeg'} alt={''} width={100} height={100}/>
            </div>
            <div className={`ImageBunch__image`}>
                <Image src={'/images/20241224 shot 1.jpeg'} alt={''} width={100} height={100}/>
            </div>
            <div className={`ImageBunch__image`}>
                <Image src={'/images/20241224 shot 1.jpeg'} alt={''} width={100} height={100}/>
            </div>
        </div>
    )
}

export default ImageBunch;
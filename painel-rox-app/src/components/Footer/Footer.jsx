import { StyleFooter } from "./style"
import logoDaanrox from '../../assets/rox-footer.png'
export const Footer = () => {

    return (

        <>
            <StyleFooter>
                <div className="footerContainer">
                    <div className='footerContent'>
                        <h1 className='poweredBy'>Powered by</h1>
                        <img src={logoDaanrox} alt='Daanrox' />
                    </div>
                </div>

            </StyleFooter>
        </>
    )
}
import useStyle from './style'

import Img from '@DefiSquarehq/marketplace-common/ui/components/img'
// import AlgoSigner from '../AlgoSigner/AlgoSigner'

const Header = () => {
    const style = useStyle()
    return (
        <header className={style.header}>
            <Img className={style.logo} src="/AlgoGenMetaverse.svg"  alt="image"/>
            <nav>
                {/* <Link href="/">
                    Home
                </Link>
                <Link href="/mint-tool">
                    Mint
                </Link> */}
               {/* <AlgoSigner/>          */}
            </nav>
        </header>
    )
}

export default Header

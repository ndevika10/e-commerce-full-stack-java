import { mens_kurta } from '../../../Data/mens_kurta'
import { dressPage1 } from '../../../Data/page1'
import { sareePage1 } from '../../../Data/page2'
import { mensShoesPage1 } from '../../../Data/shoes'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

export default function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={dressPage1} sectionName={"Women's dresses"}/>
            <HomeSectionCarousel data={dressPage1} sectionName={"Women's Sarees"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Tops"}/>

        </div>
    </div>
    )
}
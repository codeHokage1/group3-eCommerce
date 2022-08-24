import { FaBeer } from 'react-icons/fa'
import { FaSnowflake } from 'react-icons/fa'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { GiCupcake } from 'react-icons/gi'
import { GiChipsBag } from 'react-icons/gi'
import { GiWheat } from 'react-icons/gi'
import { GiMilkCarton } from 'react-icons/gi'
import { FaPepperHot } from 'react-icons/fa'

const Data = [
  {
    id: 1,
    title: 'Canned goods',
    logo: <GiOpenedFoodCan />,
  },
  {
    id: 2,
    title: 'Dairy Products',
    logo: <GiMilkCarton />,
  },
  {
    id: 3,
    title: 'Dry and Baking',
    logo: <GiCupcake />,
  },
  {
    id: 4,
    title: 'Frozen Food',
    logo: <FaSnowflake />,
  },
  {
    id: 5,
    title: 'Beverages',
    logo: <FaBeer />,
  },
  {
    id: 6,
    title: 'Snacks',
    logo: <GiChipsBag />,
  },
  {
    id: 7,
    title: 'Vegetable',
    logo: <FaPepperHot />,
  },
  {
    id: 8,
    title: 'Grain',
    logo: <GiWheat />,
  },
]

export default Data

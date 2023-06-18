import bag from '../images/category/bag.jpg';
import chot from '../images/category/chot.jpg';
import yarn from '../images/category/yarn-new.jpg';
import Category from "./model";

const categories = [
    new Category(1, 'Yarn', yarn, 'A continuous strand of fibers'),
    new Category(2, 'Bag', bag, 'Bag crafted using jute fibers'),
    new Category(3, 'Chot', chot, 'Long lasting bags'),
    new Category(4, 'Customized', null, 'Anything you wish by jute'),
];

export default categories;
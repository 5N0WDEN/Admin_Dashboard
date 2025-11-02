import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { Chart } from "react-google-charts";
import MdDarkMode from "react-icons/md";

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Pagination from '@mui/material/Pagination';



export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  'backgroundColor':'transparent',
  'chartArea': {'width':'100%', 'height':'100%'},
};

const Dashboard = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle/>} grow={true}/>
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart/>} grow={false}/>
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag/>} grow={false}/>
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack/>} grow={false}/>
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomEle">
                                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                                <div className="ml-auto toggleIcon">
                                    <div>
                                        <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={open ? 'long-menu' : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            className="dropdown_menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            slotProps={{
                                            paper: {
                                                style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                                },
                                            },
                                            list: {
                                                'aria-labelledby': 'long-button',
                                            },
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer/>Last Day    
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer/>Last Week
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer/>Last Month
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer/>Last Year
                                            </MenuItem> 
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                            <p>$3,578.90 in last month</p>
                            <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"180px"}
                            />
                        </div>
                    </div>
                </div>


                <div className="card shadow border-0 p-3">
                    <h3 className="hd">Best Selling Products</h3>

                    <div className="row cardFilters mt-3">
                        <div className="col-md-3" id='showby'>
                            <h4>SHOW BY</h4> 
                            <FormControl size="small" className="w-100">
                            <Select
                            value={showBy}
                            onChange={(event)=>setShowBy(event.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="w-100"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4> 
                            <FormControl size="small" className="w-100">
                            <Select
                            value={categoryBy}
                            onChange={(event)=>setCategoryBy(event.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="w-100"
                            id='categoryby'
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>

                        
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imageWrapper">
                                                <div className="img">
                                                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/a6d9230IW932_1.jpg"
                                                    className="w-100" alt='womans wear'/>
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)	</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="d-flex align-items-center actions w-100">
                                            <Button className="secondary" color="secondary" onClick={()=>{alert("View Product");}}><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imageWrapper">
                                                <div className="img">
                                                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/a6d9230IW932_1.jpg"
                                                    className="w-100" alt='womans wear'/>
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)	</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="d-flex align-items-center actions w-100">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imageWrapper">
                                                <div className="img">
                                                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/a6d9230IW932_1.jpg"
                                                    className="w-100" alt='womans wear'/>
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)	</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="d-flex align-items-center actions w-100">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imageWrapper">
                                                <div className="img">
                                                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/a6d9230IW932_1.jpg"
                                                    className="w-100" alt='womans wear'/>
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)	</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="d-flex align-items-center actions w-100">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imageWrapper">
                                                <div className="img">
                                                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/a6d9230IW932_1.jpg"
                                                    className="w-100" alt='womans wear'/>
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)	</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="d-flex align-items-center actions w-100">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imageWrapper">
                                                <div className="img">
                                                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/a6d9230IW932_1.jpg"
                                                    className="w-100" alt='womans wear'/>
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)	</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="d-flex align-items-center actions w-100">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imageWrapper">
                                                <div className="img">
                                                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/a6d9230IW932_1.jpg"
                                                    className="w-100" alt='womans wear'/>
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)	</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="d-flex align-items-center actions w-100">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imageWrapper">
                                                <div className="img">
                                                    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/a6d9230IW932_1.jpg"
                                                    className="w-100" alt="product"/>
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div>
                                            <del className="old">$21.00</del>
                                            <span className="new text-danger">$21.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)	</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="d-flex align-items-center actions w-100">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPencilAlt /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="d-flex tableFooter">
                            <p>showing <b>10</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" className="pagination" 
                            showFirstButton showLastButton/>
                        </div>

                    </div>
                
                
                </div>



            </div>
        </>
    )
}

export default Dashboard;
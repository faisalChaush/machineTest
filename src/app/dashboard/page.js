"use client";

import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import { Chart } from "react-google-charts";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';




function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Cosmetics", 712, "USD 4,272", 8, "USD 16,568"),
  createData("Serums", "3,961", "USD 27,331", 115, "USD 362,526"),
  createData("Facewash", "9,462", "USD 76,831", 123, "USD 266,800"),
  createData("Shampoos", "439", "USD 2,151", 5, "USD 11,029"),
  createData("Conditioners", "1,680", "USD 3,864", 49, "USD 175,245"),
  createData("Facewash 2", "4,978", "USD 29,370", 189, "USD 623,106"),
  createData("Total", "26,510", "USD 1,43,819", 489, "USD 15,73,563"),
];
const rows2 = [
  createData("Male", '348', "USD 12,528", 42, "USD 62,118"),
  createData("Female", "692", "USD 24,921", 35, "USD 5,175"),
  createData("Unknown", "105", "USD 3,943", 3, "USD 4,489"),
  createData("Total", "1,145", "USD 41,383", 80, "USD 71,782"),
];

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState('')
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortedRows = [...rows];
  if (sortBy) {
    sortedRows.sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      if (sortBy === "name") {
        return a[sortBy].localeCompare(b[sortBy]) * order;
      } else if (sortBy === "calories" || sortBy === "carbs") {
        // For numeric columns, convert the values to numbers before comparing
        return (parseFloat(a[sortBy]) - parseFloat(b[sortBy])) * order;
      } else if (sortBy === "fat" || sortBy === "protein") {
        // For cost and revenue columns, remove "USD " and commas, then convert to numbers
        return (
          (parseFloat(a[sortBy].replace("USD ", "").replace(/,/g, "")) -
            parseFloat(b[sortBy].replace("USD ", "").replace(/,/g, ""))) *
          order
        );
      }
    });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    ["Task", "Hours per Day"],
    ["35% Female", 35],
    ["25% Unknown", 25],
    ["40% Male", 40],
  
  ];
  const options = {
    // title: "My Daily Activities",
    pieHole: 0.6,
    is3D: false,
    colors: [ "#0096FF", "#323C46","#FF823C"],
    pieSliceText: "none", 
    order: "ascending" ,
    legend: {
      position: "right", 
      alignment:"center", 
      textStyle: {
        color: "#4a4a4a",
        fontSize: 14, 
      },
    },
    chartArea: {
      left: 50, 
      top: 10, 
      right: 100,
      bottom: 10, 
    },
  };




  const handleDropdownChange = (event, newValue) => {
    setAge(event.target.value);
  };
 

  
  return (
    <div style={{ height: "100%" }} className="bg-body-tertiary">
      <div className="row m-1">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <span>Ad Insights</span>
              <span style={{ color: "lightgrey" }}>
                <HelpOutlineIcon fontSize="small" />
              </span>
            </div>
            <div className="card-body p-0">
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="p-2 tableCellHead" onClick={() => handleSort("name")}>
                      Campaigns
                    </TableCell>
                    <TableCell className="p-2 tableCellHead" align="right"  onClick={() => handleSort("calories")}>
                      Clicks
                    </TableCell>
                    <TableCell className="p-2 tableCellHead" align="right"  onClick={() => handleSort("fat")}>
                      Cost
                    </TableCell>
                    <TableCell className="p-2 tableCellHead" align="right" onClick={() => handleSort("carbs")}>
                      Conversions
                    </TableCell>
                    <TableCell className="p-2 tableCellHead" align="right"  onClick={() => handleSort("protein")}>
                      Revenue
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {sortedRows.map((row) => (
                    <TableRow
                      className="p-2 tableCell"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        className="p-2 tableCell"
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell className="p-2 tableCell" align="right">
                        {row.calories}
                      </TableCell>
                      <TableCell className="p-2 tableCell" align="right">
                        {row.fat}
                      </TableCell>
                      <TableCell className="p-2 tableCell" align="right">
                        {row.carbs}
                      </TableCell>
                      <TableCell className="p-2 tableCell" align="right">
                        {row.protein}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div  style={{padding:"5px 5px"}}  className="card-header d-flex justify-content-between">
              <span style={{paddingLeft:"10px"}}>Ad Insights</span>
              <span className="DCC" style={{ color: "lightgrey" , paddingRight:"10px"}}>
              <Select  disabled={false}
  placeholder="Clicks"
  size="sm" sx={{marginRight:"5px"}} onChange={handleChange}>
      <Option value="c1">Clicks</Option>
      <Option value="c2">Clicks</Option>

    </Select>
                <HelpOutlineIcon fontSize="small" />
          
              </span>
            </div>
            <div className="card-body p-0">
              <Box sx={{ width: "100%" }}>
                <CustomTabPanel className="tabpanel" value={value} index={0}>
                 

                <Chart
      chartType="PieChart"
      className="PieChart"
      width="100%"
      height="280px"
      data={data}
      options={options}
      
    />


                </CustomTabPanel>
                <CustomTabPanel className="tabpanel" value={value} index={1}>
                <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="p-2 tableCellHead">
                      Campaigns
                    </TableCell>
                    <TableCell className="p-2 tableCellHead" align="right">
                      Clicks
                    </TableCell>
                    <TableCell className="p-2 tableCellHead" align="right">
                      Cost
                    </TableCell>
                    <TableCell className="p-2 tableCellHead" align="right">
                      Conversions
                    </TableCell>
                    <TableCell className="p-2 tableCellHead" align="right">
                      Revenue
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows2.map((row) => (
                    <TableRow
                      className="p-2 tableCell"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        className="p-2 tableCell"
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell className="p-2 tableCell" align="right">
                        {row.calories}
                      </TableCell>
                      <TableCell className="p-2 tableCell" align="right">
                        {row.fat}
                      </TableCell>
                      <TableCell className="p-2 tableCell" align="right">
                        {row.carbs}
                      </TableCell>
                      <TableCell className="p-2 tableCell" align="right">
                        {row.protein}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
                </CustomTabPanel>
                <Box>
                  <Tabs
                    className="mainTab"
                    style={{ float: "right" }}
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab icon={<DonutLargeIcon />} {...a11yProps(0)} />
                    <Tab icon={<TableChartOutlinedIcon />} {...a11yProps(1)} />
                  </Tabs>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

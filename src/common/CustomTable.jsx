import { Table } from "antd"
import "./common.css"
const CustomTable=({dataSource,columns,scroll})=>{
    
  return(
    <div className="custom-table">
    <Table  scroll={scroll} pagination={false} dataSource={dataSource} columns={columns} />

    
    </div>
  )
}
export default CustomTable;
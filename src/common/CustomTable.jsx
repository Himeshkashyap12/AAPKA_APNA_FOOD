import { Table } from "antd"
import "./common.css"
const CustomTable=({dataSource,columns})=>{
    
  return(
    <div className="custom-table">
    <Table pagination={false} dataSource={dataSource} columns={columns} />

    
    </div>
  )
}
export default CustomTable;
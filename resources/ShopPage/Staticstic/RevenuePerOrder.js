import React, { useState } from 'react'
import { AscendingArrow } from '../../Icon/ascending_arrow'
import { DescendingArrow } from '../../Icon/descending_arrow'

const RevenuePerOrder = (props) => {
  const [check, setcheck]= useState(()=> false)
  return (
    <div onClick={()=> {
        if(check=== false) {
            props.setchart(prev=> ({...prev, label: "Revenue / order",column: "revenue", column2: "orders", borderColor: "rgb(250, 68, 250)", backgroundColor: "rgb(250, 68, 250, 0.5)"}))
        }
        else {
            props.setchart(prev=> ({...prev, label: "Revenue / order",column: null,column2: null, borderColor: "rgb(250, 68, 250)", backgroundColor: "rgb(250, 68, 250, 0.5)"}))
        }
        setcheck(prev=> !prev)
    }} value={4}  className='fwekpawawa' style={{flex: "1 1 0", height: "100%", padding: 5, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: 8, margin: 8, borderTop: check=== true ? "4px solid #fa44fa" : "4px solid #fff"}}>
        <div className='fsekoawaowsas' style={{fontWeight: 600, fontSize: 14, marginBottom: 8}}>
            Revenue / order  
        </div>
        <div className='dwekopwoapsa' style={{fontWeight: 600, fontSize: 18}}>
            $ {((parseInt(_.sumBy(props.staticstic1, o=> o.revenue)) / parseInt(_.sumBy(props.staticstic1, o=> o.orders)))).toFixed(2)}
        </div>
        <br />
        <div className='ksekopwkqopwo'  style={{width: "100%", display: "flex", alignItems: 'center', flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
            <div className='jsijiaawws' style={{fontSize: 12, color: "rgb(89 89 89)"}}>
                compared to 30 days ago
            </div>
            <div className='ewoeoapskow' style={{fontSize: 13, color: "rgb(89 89 89)", display: "inline-flex", alignItems: "center", gap: 7}}>
            {(Math.abs(((parseInt(_.sumBy(props.staticstic1, o=> o.revenue)) / parseInt(_.sumBy(props.staticstic1, o=> o.orders))) / (parseInt(_.sumBy(props.staticstic2, o=> o.revenue)) / parseInt(_.sumBy(props.staticstic2, o=> o.orders))))-1) * 100).toFixed(2)}% 
            
            {((parseInt(_.sumBy(props.staticstic1, o=> o.revenue)) / parseInt(_.sumBy(props.staticstic1, o=> o.orders))) / (parseInt(_.sumBy(props.staticstic2, o=> o.revenue)) / parseInt(_.sumBy(props.staticstic2, o=> o.orders)))) > 1 ? <AscendingArrow /> : <DescendingArrow />}
            </div>
        </div>
    </div>
  )
}

export default RevenuePerOrder
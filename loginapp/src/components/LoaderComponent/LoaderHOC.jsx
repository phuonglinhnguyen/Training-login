import React, { Component } from "react";
import "./LoadIndicator.css";

/* kiểm tra xem một prop cụ thể có rỗng hay không và 
loading indicator được hiển thị cho đến khi dữ liệu được trả về.*/

const isEmpty = prop =>
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty("length") && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0);
  
/*   hàm isEmpty kiểm tra xem loadingProp có rỗng hay không và 
một indicator được hiển thị cho đến khi props được cập nhật.*/
const withLoader = loadingProp => WrappedComponent => {
  return class LoadIndicator extends Component {
    render() {
      console.log(this.props);

      return isEmpty(this.props[loadingProp]) ? (
        <div className="loader" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default withLoader;

// isEmpty(this.props[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...this.props} />

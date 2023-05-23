import React from 'react';
import './style.css';
import PlaceOrderForm from './forms/orders/placeOrder/PlaceOrderForm';
import ReceiveOrderForm from './forms/orders/receiveOrder/ReceiveOrderForm';
import AuditForm from './forms/inventory/audit/AuditForm';
import { BREAD_INCORPORATED, PASTA_LAND } from './constants/vendors';
import INVENTORY_ITEM_LIST from './constants/items';

export default function App() {
  return (
    <React.Fragment>
      <PlaceOrderForm />
      <hr />
      <ReceiveOrderForm />
      <hr />
      <AuditForm />
      <hr />
      <p>
        <b>Vendors:</b> {BREAD_INCORPORATED}, {PASTA_LAND}
      </p>
      <p>
        <b>Item List: </b>
        {INVENTORY_ITEM_LIST.APPLE}, {INVENTORY_ITEM_LIST.ORANGE}
      </p>
    </React.Fragment>
  );
}

import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import  Cart  from "./components/Cart";


const mockCart1=[{price:20},{price:30}]
const mockCart2=[{price:.25},{price:.25},{price:.25},{price:.25},{price:.25}]

describe ('Cart component',()=>{
  it('Should increase total',()=>{
    render(<Cart cart={mockCart1}/>);
    expect(screen.getByRole('heading',{name:"TOTAL: 50"})).toBeInTheDocument();
  })
  it('Should increase total with cents inputs',()=>{
    render(<Cart cart={mockCart2}/>);
    expect(screen.getByRole('heading',{name:"TOTAL: 1.25"})).toBeInTheDocument();
  })
})


import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
    request: NextRequest, 
    {params}: {params: { id: number }}) {
        //Fetch data from db
        //If not found, return 404 error
        //Else return data
        if (params.id > 10)
            return NextResponse.json({ error: 'Product not found'}, { status: 404})

        return NextResponse.json({ id: 1, name: "Milk", price: 2.5 });
}

export async function PUT(
    request: NextRequest,
    {params}: {params: { id: number }}) {

        //Validate the request body
        const body = await request.json();
        const validation = schema.safeParse(body);

        if(!validation.success)
            return NextResponse.json(validation.error.errors, { status: 400 });
    
        //Using this as an example, if we update a product with an id greater than 10, it will return with a message that the product doesn't exist
        if(params.id > 10)
            return NextResponse.json({ error: 'Product not found'}, { status: 404 });

        return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

export function DELETE(
    request: NextRequest,
    {params}: {params: { id: string }}) {
        //In a real app we would fetch product from db
        //If not found, return 404
        //This only simulates a delete

        if(parseInt(params.id) > 5)
            return NextResponse.json({ error: 'Product not found'}, { status: 404 });

        let response = {}
        
        switch(parseInt(params.id)) {
            case 1:
                response = {
                    message: "You have successfully deleted a product",
                    id: params.id,
                    name: "Milk"
                };
                break;
            case 2:
                response = {
                    message: "You have successfully deleted a product",
                    id: params.id,
                    name: "Bread"
                };
                break;
            case 3:
                response = {
                    message: "You have successfully deleted a product",
                    id: params.id,
                    name: "Eggs"
                };
                break;
            case 4:
                response = {
                    message: "You have successfully deleted a product",
                    id: params.id,
                    name: "Ice Cream"
                };
                break;
            case 5:
                response = {
                    message: "You have successfully deleted a product",
                    id: params.id,
                    name: "Pizza"
                };
                break;
        }

        return NextResponse.json(response);
}

export interface CommonPropsForScreen{
    i: number;
    end: number
}

export interface CommonPropsData extends CommonPropsForScreen{
    setData: React.Dispatch<React.SetStateAction<_Data_>>
}
export interface CommonPDataPlus extends CommonPropsData{
    Data: _Data_
}
export interface CommonPDataViewer extends CommonPropsForScreen{
    Data: _Data_
}

export interface _Data_{
    Name: string
    Email: string
    M_Name: string
    D_Name: string
    College: string
    Course: string
    Country: string
    RG: string
    CPF: string,
    CEP: string,
    State: string,
    City: string,
    Address: string,
    district: string
}
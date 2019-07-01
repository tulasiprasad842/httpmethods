export interface Sender {
    // senderId: number;
    senderName: string;
    // senderType: number;
    status: number;
}


export interface Prority {
    serviceCode: string;
    serviceName: string;
    status: number;
    templateId: number;
}


export interface IntervalType {
    intervalName: string;
    intervalTypeId: number;
}

export interface OfflineAlert {
    alertOfflineId: number;
    delimiter: string;
    deptId: number;
    deptName: string;
    filePattern: string;
    filepath: string;
    filetype: string;
    header: string;
    intervalType: IntervalType;
    intervalValue: string;
    message: string;
    messageType: number;
    mobileColumn: string;
    movePath: string;
    offlineAlertName: string;
    senderId: number;
    serviceId: number;
    status: number;
}


export interface InterfaceInfo {
    interfaceCode: string;
    interfaceDesc: string;
    interfaceId: number;
    interfaceName: string;
    status: number;
}


export interface ICreate {
    interfaceDesc: string;
    interfaceName: string;
    interfaceCode: string
}


export interface IUpdate{
    interfaceCode: string;
    interfaceDesc: string;
    interfaceId: number;
    interfaceName: string;
    status: number;
}

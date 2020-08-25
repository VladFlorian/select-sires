export interface QuickLog {
    userId: string;
    userName: string;
    editor: {
        id: string;
        name: string;
    }
    edited: any;
    author: {
        id: string;
        name: string;
    }
    authored: any;
    //Common data Object for creates
    create: {
        editor: {
            id: string;
            name: string;
        }
        edited: any;
        author: {
            id: string;
            name: string;
        }
        authored: any;
    }
    //Common data Object for updates
    update: {
        editor: {
            id: string;
            name: string;
        }
        edited: any;
    }
}
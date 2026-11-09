

const multiplyValue =(value: number, multiplier?: number):number => {
    if (multiplier !== undefined){
        return value * multiplier;
        
    } else{
        return value*2
    }
}





const processInput = (value: string | number | boolean) =>{
    if( typeof value == "string"){
        return value.trim().toLowerCase();

    } else if(typeof value == "number"){
        return value*10;
    } else{
        return value? "Active": "Inactive"
    }
}





const formatCoordinate = (
    coordinate: readonly [number, number, string]
): string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
};



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
};





const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {
    return items.map((item) => item[key]);
};



class Employee {
   protected name: string;
     private _baseSalary: number;
    
    constructor(name: string, baseSalary: number){
        this.name = name;
        this._baseSalary = baseSalary;
    }

    getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`
    }
}

class Manager extends Employee {
   private department: string;

    constructor(
       name: string, 
       baseSalary: number, department: string){
       super(name, baseSalary);
       this.department = department;
    
        }

        getRoleInfo(){
             return `Manager of ${this.department}: ${this.name}`
        }
       


}




const manager = new Manager('Mizan', 2433, 'Admin');



manager.getDetails();
manager.getRoleInfo();




const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age>=18){
            setTimeout(() => {
                resolve("Access Granted");
            },1000);
        } else{
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })
    
}



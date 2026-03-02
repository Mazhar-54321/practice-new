const user = {
    id:1,
    name:'John Doe',
    address:{
        city:'New York',
        zip:'10001'
    }
}
 const updateduser = {...user,  address:{...user.address, city:'London'}}
 console.log(updateduser)
//  The Core Summary: Memory & References
// Ok my turn , behind the scene there are two types of memories used for storage purpose
// 1) Stack( Used in case of fixed memory size like primitive values and memory references)
// 2)Heap( Used in case of variable memory sizes like objects,arrays and functions as it is scalable)
// Call by Value vs Call by reference:
// 1) For primitives we use call by value since there is no bottleneck in copying exact value and each variable of primitive data type are independent and will not reflect each others behaviour.
// 2) For non-primitives we use call by reference since there is a catch in the performance of misusing RAM and to understand it briefly we can take an object which requires 10MB of RAM and say  like 10 different functions want to copy the same object lest we will be using 100MB of RAM for same data object which can be optimized in vice-versa scenaio where we use 10MB of RAM of 10 pointers of say like 1 byte each . 
// Thats how creators of JS have used call by reference as their alternative choice for memory management  
// The const and Objects: 
// 1)const locks the Stack so apparently we are not allowed to change the primitives and memory references 
// 2) Since Objects are stored in heap and their references are stored in stack so partial lock is applied on const objects whereas if we try to change the property of a const object the behaviour is not the same and we can mutate the object props . 
// To achieve full lock we have to adapt Object.freeze method
// The Spread Operator(...):
// 1) It follows shallow copy mechanism which works on top level properties and again in top level only primitives are copied by value and non primitives are copied by reference and hence if we change any non primitives , 
// the parent object gets reflected too. We can use deepCopy for full benefits of copying
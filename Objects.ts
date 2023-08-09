const user = {
  name: "Gyan",
  email: "hello@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Gyan", isPaid: true });
//In These Case I can Only send Information Which is allowed To Export in function;
function createCourse(): { name: string; price: number } {
  return { name: "Gyan", price: 16 };
}
//In These Case I can Only send Information Which is allowed To Export in function;
function createCourses(): { name: string; price: number } {
  let user = { name: "Gyan", price: 16, Email: "hello@ttygmail.com" };
  return user;
}
createCourse();
createCourses();

export {};

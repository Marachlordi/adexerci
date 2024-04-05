interface Student {
  id: number;
  name: string;
  age?: number;
  grade?: string;
}

const updateStudentInfo = (student: Student, newInfo: Partial<Student>): Student => {
  // Create a new student object with the existing student's properties
  const updatedStudent: Student = { ...student };

  // Iterate over the keys of the newInfo object
  for (const key in newInfo) {
    // Check if the key exists in the newInfo object
    if (newInfo.hasOwnProperty(key)) {
      // Update the property in the updatedStudent object
      (updatedStudent as any)[key] = (newInfo as any)[key];
    }
  }

  // Return the updated student object
  return updatedStudent;
};

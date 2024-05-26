import json

def get_student_data():
    student = {}
    student['username'] = input("Enter username: ")
    student['email'] = input("Enter email: ")
    student['name'] = input("Enter name: ")
    
    subjects = ['aiml', 'atcd', 'dbms', 'rmip', 'cn']
    student['subjects'] = {}
    
    for subject in subjects:
        student['subjects'][subject] = {}
        for i in range(1, 4):
            ia = f'ia{i}'
            marks = int(input(f"Enter marks for {subject} {ia}: "))
            attendance = int(input(f"Enter attendance for {subject} {ia}: "))
            student['subjects'][subject][ia] = {
                'marks': marks,
                'attendance': attendance
            }
    
    return student

def main():
    student_data = get_student_data()
    json_data = json.dumps(student_data, indent=2)
    print(json_data)
    
    # Save to file
    with open('student_data.json', 'w') as json_file:
        json_file.write(json_data)
    print("Student data saved to student_data.json")

if __name__ == "__main__":
    main()

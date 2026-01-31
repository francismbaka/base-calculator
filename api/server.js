def base_calculator():
    print("--- Base Calculator (Dec, Bin, Hex, Oct) ---")
    
    try:
        # Input first number and its base
        val1_raw = input("Enter first number: ")
        base1 = int(input("Enter base of first number (2, 8, 10, 16): "))
        
        # Input second number and its base
        val2_raw = input("Enter second number: ")
        base2 = int(input("Enter base of second number (2, 8, 10, 16): "))
        
        # Convert both to Decimal (Base 10) for calculation
        num1 = int(val1_raw, base1)
        num2 = int(val2_raw, base2)
        
        operation = input("Select operation (+, -, *, /): ")
        
        # Perform arithmetic
        if operation == '+':
            result = num1 + num2
        elif operation == '-':
            result = num1 - num2
        elif operation == '*':
            result = num1 * num2
        elif operation == '/':
            result = num1 / num2 if num2 != 0 else "Error: Division by zero"
        else:
            return "Invalid operation"

        if isinstance(result, float):
            print(f"\nDecimal Result: {result}")
        else:
            print("\n--- Results ---")
            print(f"Decimal: {result}")
            print(f"Binary:  {bin(result)}")
            print(f"Hex:     {hex(result).upper()}")
            print(f"Octal:   {oct(result)}")

    except ValueError:
        print("Error: Invalid input for the specified base.")

if __name__ == "__main__":
    base_calculator()

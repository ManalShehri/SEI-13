class BankAccount:
    # Class proeties .... empty for now
    def __init__(self, acc_num, interest=0.02):
        self.__acc_number = acc_num
        self.__interest = interest
        self.__balance = 0

    def deposit(self, amount):
        if amount < 0:
            return False
        else:
            self.__balance += amount
            return self.__balance

    def withdraw(self, amount):
        if amount < 0:
            return False
        elif self.__balance > amount:
            self.__balance -= amount
            return self.__balance
        else:
            return False

    def accumulate_interest(self):
        self.__balance *= self.__interest
        return self.__balance


class ChildrensAccount(BankAccount):
    def __init__(self, acc_num):  # constructor here must pass arguments to the parent
        super().__init__(
            acc_num, 0
        )  # We pass everything explicitely to the parent constructor
        # in the lesson is self.__interst = 0

    def accumulate_interest(self):
        self.__balance += 10
        return self.__balance


class OverdraftAccount(BankAccount):
    def __init__(
        self, acc_num, interest=0.02
    ):  # constructor here must pass arguments to the parent
        super().__init__(acc_num, interest)
        self.__overdraft_penalty == 40

    def withdraw(self, amount):
        if amount > self.__balance:
            self.__balance -= self.__overdraft_penalty
            return False
        else:
            return super().withdraw(amount)

    def accumulate_interest(self):
        if self.__balance <= 0:
            return self.__balance
        else:
            return super().accumulate_interest()

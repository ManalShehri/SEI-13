class Car:
  gas = 0
  seats = 4
  def __init__(self, color, tank_size):
    self.color = color
    self.tank_size = tank_size

  def drive(self, distance):
    if self.gas > 0:
      self.gas -= distance / 20 # our cars will get 20 miles/gallon
    else:
      print('Empty tank! Fill me up!')

  def fill_tank(self):
    self.gas = self.tank_size

class Truck(Car):
  seats = 2
  def __init__(self, color, tank_size, bed_size):
    super().__init__(color, tank_size)
    self.bed_size = bed_size

big_red_truck = Truck('red', 50, 12)
big_red_truck.fill_tank()
big_red_truck.drive(50)
print(big_red_truck.gas)
print(big_red_truck.seats)

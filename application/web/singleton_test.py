from firebase import Firebase

fb = Firebase()
fb2 = Firebase()

print(f'id(fb) = {id(fb)}')
print(f'id(fb2) = {id(fb2)}')

if id(fb) == id(fb2):
    print('fb dan fb2 adalah instance yang sama, singleton berhasil')
else:
    print('fb dan fb2 adalah instance yang berbeda, singleton gagal')
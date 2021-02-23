import itertools


def efficientTriangles(a, b):
    count = 0
    triangles = 0
    for triple in itertools.combinations(
        itertools.product(range(1, 1 + a), range(1, 1 + b)), 3
    ):
        count += 1
        (x1, y1), (x2, y2), (x3, y3) = triple
        print("count: ", count, "triple: ", triple)
        if x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0:
            print("zero area")
            continue
        print("triangle")
        triangles += 1
    return triangles


print("efficientTriangles: ", efficientTriangles(2, 3))

import re

def sanitize_filename(name):
    return re.sub(r'[^a-zA-Z0-9]', '-', name).lower()

with open('main.js', 'r') as f:
    content = f.read()

meals_js = content.split('const meals = [')[1].split('];')[0]
meals = []
# This is a bit of a hacky way to parse the javascript object, but it should work for this specific file
for meal_str in meals_js.split('{'):
    if 'Name' not in meal_str:
        continue

    name = re.search(r'"Name": "(.*?)",', meal_str).group(1)
    image_url = re.search(r'"Image": "(.*?)",', meal_str).group(1)

    if "assets/images" in image_url:
        continue

    filename = sanitize_filename(name)

    extension = image_url.split('.')[-1]
    if extension not in ['jpg', 'jpeg', 'png', 'webp']:
        extension = 'jpg'

    new_path = f"assets/images/{filename}.{extension}"

    # Handle the two failed images
    if name == "Smothered Turkey Meatballs" or name == "Shepherd's Pie":
        continue

    content = content.replace(image_url, new_path)

with open('main.js', 'w') as f:
    f.write(content)

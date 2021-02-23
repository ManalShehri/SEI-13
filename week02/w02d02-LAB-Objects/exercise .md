[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Objects

## The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).``` books =  [{ title : "" , auther : " , alreadyRead : false} , ...] ```
- Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
- Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

## The Recipe Card

Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

```
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
```

## The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
- Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
  - Maybe the [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method will be helpful here

### further
Copy and paste the object below into your code.

`console.log` the following:

- product image id

- tweet user friends count

```
var product = {
  "product": {
    "id": 632910392,
    "title": "New product title",
    "body_html": "<p>It's the small iPod with one very big idea: Video. Now the world's most popular music player, available in 4GB and 8GB models, lets you enjoy TV shows, movies, video podcasts, and more. The larger, brighter display means amazing picture quality. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just $149, little speaks volumes.</p>",
    "vendor": "Apple",
    "product_type": "Cult Products",
    "created_at": "2019-05-01T15:21:27-04:00",
    "handle": "ipod-nano",
    "updated_at": "2019-05-01T15:22:04-04:00",
    "published_at": "2007-12-31T19:00:00-05:00",
    "template_suffix": null,
    "tags": "Emotive, Flash Memory, MP3, Music",
    "published_scope": "web",
    "admin_graphql_api_id": "gid://shopify/Product/632910392",
    "variant": {
        "id": 808950810,
        "product_id": 632910392,
        "title": "Pink",
        "price": "199.00",
        "sku": "IPOD2008PINK",
        "position": 1,
        "inventory_policy": "continue",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Pink",
        "option2": null,
        "option3": null,
        "created_at": "2019-05-01T15:21:27-04:00",
        "updated_at": "2019-05-01T15:21:27-04:00",
        "taxable": true,
        "barcode": "1234_pink",
        "grams": 567,
        "image_id": 562641783,
        "weight": 1.25,
        "weight_unit": "lb",
        "inventory_item_id": 808950810,
        "inventory_quantity": 10,
        "old_inventory_quantity": 10,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/808950810",
        "presentment_price": {
            "price": {
              "currency_code": "USD",
              "amount": "199.00"
            },
            "compare_at_price": null
        }
    },
    "option": {
        "id": 594680422,
        "product_id": 632910392,
        "name": "Color",
        "position": 1
    },
    "image": {
      "id": 850703190,
      "product_id": 632910392,
      "position": 1,
      "created_at": "2019-05-01T15:21:27-04:00",
      "updated_at": "2019-05-01T15:21:27-04:00",
      "alt": null,
      "width": 123,
      "height": 456,
      "src": "https://cdn.shopify.com/s/files/1/0006/9093/3842/products/ipod-nano.png?v=1556738487",
      "admin_graphql_api_id": "gid://shopify/ProductImage/850703190"
    }
  }
};
var tweet = {
        "created_at":"Mon Apr 30 23:08:44 +0000 2018",
        "id":991092016195911700,
        "id_str":"991092016195911680",
        "text":"Eli with the drip https://t.co/FlNgliReGv",
        "truncated":false,
        "entity":{
            "media": {
                "id":991091953990189000,
                "id_str":"991091953990189057",
                "index":18,
                "media_url":"http://pbs.twimg.com/ext_tw_video_thumb/991091953990189057/pu/img/h2QqkBL3Wbayj-i4.jpg",
                "media_url_https":"https://pbs.twimg.com/ext_tw_video_thumb/991091953990189057/pu/img/h2QqkBL3Wbayj-i4.jpg",
                "url":"https://t.co/FlNgliReGv",
                "display_url":"pic.twitter.com/FlNgliReGv",
                "expanded_url":"https://twitter.com/kanyewest/status/991092016195911680/video/1",
                "type":"photo",
                "sizes":{
                    "thumb":{
                        "w":150,
                        "h":150,
                        "resize":"crop"
                    },
                    "small":{
                        "w":383,
                        "h":680,
                        "resize":"fit"
                    },
                    "large":{
                        "w":720,
                        "h":1280,
                        "resize":"fit"
                    },
                    "medium":{
                        "w":675,
                        "h":1200,
                        "resize":"fit"
                    }
                }
            }
    },
    "extended_entities":{
        "media":  {
            "id":991091953990189000,
            "id_str":"991091953990189057",
            "index":18,
            "media_url":"http://pbs.twimg.com/ext_tw_video_thumb/991091953990189057/pu/img/h2QqkBL3Wbayj-i4.jpg",
            "media_url_https":"https://pbs.twimg.com/ext_tw_video_thumb/991091953990189057/pu/img/h2QqkBL3Wbayj-i4.jpg",
            "url":"https://t.co/FlNgliReGv",
            "display_url":"pic.twitter.com/FlNgliReGv",
            "expanded_url":"https://twitter.com/kanyewest/status/991092016195911680/video/1",
            "type":"video",
            "sizes":{
                "thumb":{
                    "w":150,
                    "h":150,
                    "resize":"crop"
                },
                "small":{
                    "w":383,
                    "h":680,
                    "resize":"fit"
                },
                "large":{
                    "w":720,
                    "h":1280,
                    "resize":"fit"
                },
                "medium":{
                    "w":675,
                    "h":1200,
                    "resize":"fit"
                }
            },
            "video_info":{
                "aspect_ratio":9,
                "duration_millis":8598,
                "variant":  {
                        "bitrate":2176000,
                        "content_type":"video/mp4",
                        "url":"https://video.twimg.com/ext_tw_video/991091953990189057/pu/vid/720x1280/TweYmUcpyHh74BqM.mp4?tag=3"
                }
            },
            "additional_media_info":{
                "monetizable":false
            }
        }
    },
    "source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id":null,
    "in_reply_to_status_id_str":null,
    "in_reply_to_user_id":null,
    "in_reply_to_user_id_str":null,
    "in_reply_to_screen_name":null,
    "user":{
        "id":169686021,
        "id_str":"169686021",
        "name":"KANYE WEST",
        "screen_name":"kanyewest",
        "location":"",
        "description":"",
        "url":"http://t.co/ZdywsugSWD",
        "entities":{
            "url":{
                "url":"http://t.co/ZdywsugSWD",
                "expanded_url":"http://KANYEWEST.COM",
                "display_url":"KANYEWEST.COM",
                "index":0
            },
            "description":{
            }
        },
        "protected":false,
        "followers_count":28134561,
        "friends_count":3,
        "listed_count":49854,
        "created_at":"Thu Jul 22 23:00:05 +0000 2010",
        "favourites_count":2,
        "utc_offset":-36000,
        "time_zone":"Hawaii",
        "geo_enabled":false,
        "verified":true,
        "statuses_count":330,
        "lang":"en",
        "contributors_enabled":false,
        "is_translator":false,
        "is_translation_enabled":false,
        "profile_background_color":"C0DEED",
        "profile_background_image_url":"http://pbs.twimg.com/profile_background_images/390200267/Screen_Shot_2011-12-27_at_11.53.35_PM.png",
        "profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/390200267/Screen_Shot_2011-12-27_at_11.53.35_PM.png",
        "profile_background_tile":true,
        "profile_image_url":"http://pbs.twimg.com/profile_images/585565077207678977/N_eNSBXi_normal.jpg",
        "profile_image_url_https":"https://pbs.twimg.com/profile_images/585565077207678977/N_eNSBXi_normal.jpg",
        "profile_banner_url":"https://pbs.twimg.com/profile_banners/169686021/1428444619",
        "profile_link_color":"0084B4",
        "profile_sidebar_border_color":"C0DEED",
        "profile_sidebar_fill_color":"DDEEF6",
        "profile_text_color":"333333",
        "profile_use_background_image":true,
        "has_extended_profile":false,
        "default_profile":false,
        "default_profile_image":false,
        "following":true,
        "follow_request_sent":false,
        "notifications":false,
        "translator_type":"none"
    },
    "geo":null,
    "coordinates":null,
    "place":null,
    "contributors":null,
    "is_quote_status":false,
    "retweet_count":956,
    "favorite_count":9051,
    "favorited":false,
    "retweeted":false,
    "possibly_sensitive":false,
    "lang":"en"
};
```


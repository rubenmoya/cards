/* eslint-disable no-use-before-define */

import Inline from '../inline.macro'
import { Link, Flex, Image, Box, Text } from './scope'

const code = (
  <Inline>
    <>
      <Flex
        sx={{
          bg: query.bg,
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            bg: 'white',
            color: 'black',
            margin: 50,
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            padding: '30px',
            border: '2px solid',
            borderColor: query.color,
            boxShadow: `10px 10px 0px 0px ${query.color}`
          }}
        >
          <Link
            href='https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&display=swap'
            rel='stylesheet'
          />
          <Text
            sx={{
              pt: 4,
              pb: 5,
              fontSize: 6,
              lineHeight: 1.4,
              fontWeight: '900',
              fontFamily: 'Merriweather',
              maxWidth: '36rem'
            }}
            children={query.title}
          />
          <Flex
            sx={{
              justifyContent: 'space-between'
            }}
          >
            <Flex
              sx={{
                alignItems: 'center'
              }}
            >
              <Image
                sx={{
                  border: '2px solid',
                  borderColor: query.color,
                  maxHeight: '50px',
                  borderRadius: '50%',
                  marginRight: '10px'
                }}
                src={query.avatar}
              />
              <Text
                sx={{
                  fontSize: 3,
                  fontWeight: '400',
                  fontFamily: 'Merriweather'
                }}
                children={query.author}
              />
              <Text
                sx={{
                  fontSize: 3,
                  px: 2,
                  fontWeight: '400',
                  fontFamily: 'Merriweather'
                }}
                children='•'
              />
              <Text
                sx={{
                  fontSize: 3,
                  fontWeight: '400',
                  fontFamily: 'Merriweather'
                }}
                children={query.date}
              />
            </Flex>

            <Flex
              sx={{
                width: '200px',
                justifyContent: 'space-between'
              }}
            >
              {query.logos.map((image, index) => {
                return (
                  <Image
                    sx={{
                      maxHeight: '50px'
                    }}
                    style={{
                      transform: `rotate(${index % 2 === 1 ? '0deg' : '15deg'})`
                    }}
                    key={image}
                    src={image}
                  />
                )
              })}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  </Inline>
)

const query = {
  title: 'Learn Web Development for Free',
  avatar: 'https://kikobeats.com/images/avatar-glitch.jpg',
  author: 'Kiko Beats',
  date: '29 Apr',
  bg: '#EAF1F7',
  color: '#000',
  logos: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/490px-Unofficial_JavaScript_logo_2.svg.png',
    'https://miro.medium.com/max/1024/1*dOizsWycMALIUfqbpNvaMQ.png',
    'https://vuejs.org/images/logo.png'
  ]
}

export default { name: 'The Practical Dev', code, query }

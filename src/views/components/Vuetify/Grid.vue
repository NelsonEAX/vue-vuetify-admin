<template>
  <div>
    <v-container class="container--fluid text-center">
      <v-row>
        <v-col cols="12">
          <v-card
            dark
            color="primary"
          >
            <v-card-text class="px-0">
              12
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          v-for="i in 2"
          :key="`6${i}`"
          cols="6"
        >
          <v-card
            dark
            color="secondary"
          >
            <v-card-text class="px-0">
              6
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          v-for="i in 3"
          :key="`4${i}`"
          cols="4"
        >
          <v-card
            dark
            color="primary"
          >
            <v-card-text class="px-0">
              4
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          v-for="i in 4"
          :key="`3${i}`"
          cols="3"
        >
          <v-card
            dark
            color="secondary"
          >
            <v-card-text class="px-0">
              3
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          v-for="i in 6"
          :key="`2${i}`"
          cols="2"
        >
          <v-card
            dark
            color="primary"
          >
            <v-card-text class="px-0">
              2
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          v-for="i in 12"
          :key="`1${i}`"
          cols="1"
        >
          <v-card
            dark
            color="secondary"
          >
            <v-card-text class="px-0">
              1
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container--fluid">
      <v-row

        justify="space-between"
      >
        <v-col cols="2">
          <v-card
            dark
            color="primary"
          >
            <v-card-text>one</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            dark
            color="secondary"
          >
            <v-card-text>two</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            dark
            color="accent"
          >
            <v-card-text>three</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row

        justify="space-around"
      >
        <v-col cols="2">
          <v-card
            dark
            color="primary"
          >
            <v-card-text>one</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            dark
            color="secondary"
          >
            <v-card-text>two</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            dark
            color="accent"
          >
            <v-card-text>three</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row

        justify="center"
      >
        <v-col cols="2">
          <v-card
            dark
            color="primary"
          >
            <v-card-text>one</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            dark
            color="secondary"
          >
            <v-card-text>two</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            dark
            color="accent"
          >
            <v-card-text>three</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container--fluid">
      <v-row>
        <v-col
          class="flex-grow-1"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            color="purple"
            dark
          >
            <v-card-title
              primary
              class="title"
            >
              Lorem
            </v-card-title>
            <v-card-text>{{ lorem }}</v-card-text>
          </v-card>
        </v-col>
        <v-col
          class="flex-grow-1"
          cols="12"
          sm="6"
          md="3"
        >
          <v-row>
            <v-col class="flex-grow-1">
              <v-card
                color="indigo"
                dark
              >
                <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
              </v-card>
            </v-col>
            <v-col class="flex-grow-1">
              <v-row>
                <v-col
                  v-for="n in 2"
                  :key="n"
                  cols="12"
                  class="flex-grow-1"
                >
                  <v-card
                    color="red lighten-2"
                    dark
                  >
                    <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="flex-grow-1 child-flex"
          cols="12"
          sm="6"
          md="2"
        >
          <v-card
            color="green lighten-2"
            dark
          >
            <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
          </v-card>
        </v-col>
        <v-col
          class="flex-grow-1"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card
            color="blue lighten-2"
            dark
          >
            <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container--fluid">
      <v-row>
        <v-col
          class="flex-grow-1"
          cols="12"
          order="5"
        >
          <v-row>
            <v-col class="flex-grow-1">
              <v-card
                color="blue-grey"
                dark
                tile
                flat
              >
                <v-card-text>{{ lorem }}</v-card-text>
              </v-card>
            </v-col>
            <v-col class="flex-grow-1">
              <v-card
                color="brown"
                dark
                tile
                flat
              >
                <v-card-text>{{ lorem }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="flex-grow-1"
          cols="12"
          sm="7"
        >
          <v-row>
            <v-col class="flex-grow-1">
              <v-card
                color="indigo lighten-2"
                dark
                tile
                flat
              >
                <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
              </v-card>
            </v-col>
            <v-col class="flex-grow-1">
              <v-row>
                <v-col
                  v-for="n in 2"
                  :key="n"
                  class="flex-grow-1"
                >
                  <v-card
                    color="amber lighten-2"
                    tile
                    flat
                  >
                    <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="flex-grow-1 child-flex"
          cols="12"
          sm="2"
        >
          <v-card
            color="orange lighten-2"
            tile
            flat
          >
            <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
          </v-card>
        </v-col>
        <v-col
          class="flex-grow-1"
          cols="12"
          sm="3"
        >
          <v-card
            color="red lighten-2"
            dark
            tile
            flat
          >
            <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { lorem } from '@/api/mock';

export default {
  name: 'Grid',
  data: () => ({
    lorem,
  }),
};
</script>

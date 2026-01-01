"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, Play, Music, Disc } from "lucide-react"
import { AlbumCard } from "@/components/album-card"
import { SongListItem } from "@/components/song-list-item"
import type { Profile, Album, Song, Playlist } from "@/lib/types"
import { createClient } from "@/lib/supabase/client"
import { mutate } from "swr"

interface ArtistProfileContentProps {
  artist: Profile
  albums: Album[]
  singles: Song[]
  isSaved: boolean
  userId: string
  playlists: Playlist[]
}

export function ArtistProfileContent({
  artist,
  albums,
  singles,
  isSaved: initialIsSaved,
  userId,
  playlists,
}: ArtistProfileContentProps) {
  const [isSaved, setIsSaved] = useState(initialIsSaved)
  const [isSaving, setIsSaving] = useState(false)

  const toggleSave = async () => {
    if (!userId) return
    setIsSaving(true)
    const supabase = createClient()

    if (isSaved) {
      await supabase
        .from("library_items")
        .delete()
        .eq("user_id", userId)
        .eq("artist_id", artist.id)
    } else {
      await supabase.from("library_items").insert({
        user_id: userId,
        artist_id: artist.id,
      })
    }

    setIsSaved(!isSaved)
    setIsSaving(false)
    mutate(`library-artists-${userId}`)
  }

  return (
    <div className="flex flex-col">
      <div className="relative h-80 w-full overflow-hidden bg-gradient-to-b from-primary/20 to-background flex items-end p-8">
        <div className="flex items-center gap-8">
          <Avatar className="h-48 w-48 border-4 border-background shadow-2xl">
            <AvatarImage src={artist.avatar_url || ""} />
            <AvatarFallback className="text-4xl">
              {artist.artist_name?.[0] || artist.display_name?.[0] || "?"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Verifizierter Künstler
            </p>
            <h1 className="text-6xl font-black mb-4">{artist.artist_name || artist.display_name}</h1>
            <div className="flex items-center gap-4">
              <Button onClick={toggleSave} variant={isSaved ? "secondary" : "default"} disabled={isSaving} className="rounded-full">
                <Heart className={`h-4 w-4 mr-2 ${isSaved ? "fill-primary text-primary" : ""}`} />
                {isSaved ? "In Bibliothek" : "Folgen"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {artist.artist_bio && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Über</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">{artist.artist_bio}</p>
          </section>
        )}

        {albums.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Alben</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {albums.map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </div>
          </section>
        )}

        {singles.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Singles & Songs</h2>
            <div className="space-y-1">
              {singles.map((song) => (
                <SongListItem key={song.id} song={song} queue={singles} playlists={playlists} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

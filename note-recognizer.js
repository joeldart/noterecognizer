function NoteRecognizer() {
    this._strokes = [];
    this.addStroke = function (pts) {
        
    }
    this.onrecognized = function (e) { };
    this._recognizeNotes = function () {
        var outputArr      =[],
            outputArr2     =[],
            specialCases   =[], //right now, I'm not so sure what we're gonna do wtih specail cases... it may later be a strokes object
            foundLines     =[],
            foundCircles   =[],
            foundQRests    =[],
            level2Lines    =[],
            level2Circles  =[],
            level2QRests   =[],
            level3Lines    =[],
            level3Circles  =[],
            level3QRests   =[];
            
            
/*            For Each s As Stroke In musicInk.Strokes 'musicStrokes
                Dim theRenderer As New Renderer
                Dim theArray() As System.Drawing.Point = s.GetPoints()
                theRenderer.InkSpaceToPixel(g_MainGraphics, theArray)
                Dim inkRect As Rectangle = s.GetBoundingBox
                inkRect = s.GetBoundingBox

                upperLeft = New Point(inkRect.X, inkRect.Y)
                Dim lowerRight As Point = New Point(inkRect.X + inkRect.Width, inkRect.Y + inkRect.Height)
                DrawingSurface.Renderer.InkSpaceToPixel(g_MainGraphics, upperLeft)
                DrawingSurface.Renderer.InkSpaceToPixel(g_MainGraphics, lowerRight)

                Dim theWidth As Integer = lowerRight.X - upperLeft.X
                Dim theHeight As Integer = lowerRight.Y - upperLeft.Y
                Dim qwidth As Integer = theWidth / 3
                Dim qheight As Integer = theHeight / 3
                theImage = Array.CreateInstance(theWidth.GetType, theWidth + 1, theHeight + 1)
                dXArr = Array.CreateInstance(theWidth.GetType, theWidth + 1, theHeight + 1)
                dYArr = Array.CreateInstance(theWidth.GetType, theWidth + 1, theHeight + 1)
                createImageDxDy(s, theImage, dXArr, dYArr, upperLeft, lowerRight)

                Dim currshape As musicShapeInfo = findShape(theImage, dXArr, dYArr, upperLeft, lowerRight)
                Select Case currshape.shape
                    Case musicShapeInfo.openNote, musicShapeInfo.filledNote
                        Me.insertInShapeArrayList(currshape, foundCircles)
                    Case musicShapeInfo.QRest
                        Me.insertInShapeArrayList(currshape, foundQRests)
                    Case musicShapeInfo.vertLine, musicShapeInfo.horzLine
                        Me.insertInShapeArrayList(currshape, foundLines)
                End Select
            Next s
*/
            
      /*
          Public Sub PlayMusic(ByVal method As Integer)
        Try

            For Each s As Stroke In musicInk.Strokes 'musicStrokes
                Dim theRenderer As New Renderer
                Dim theArray() As System.Drawing.Point = s.GetPoints()
                theRenderer.InkSpaceToPixel(g_MainGraphics, theArray)
                Dim inkRect As Rectangle = s.GetBoundingBox
                inkRect = s.GetBoundingBox

                upperLeft = New Point(inkRect.X, inkRect.Y)
                Dim lowerRight As Point = New Point(inkRect.X + inkRect.Width, inkRect.Y + inkRect.Height)
                DrawingSurface.Renderer.InkSpaceToPixel(g_MainGraphics, upperLeft)
                DrawingSurface.Renderer.InkSpaceToPixel(g_MainGraphics, lowerRight)

                Dim theWidth As Integer = lowerRight.X - upperLeft.X
                Dim theHeight As Integer = lowerRight.Y - upperLeft.Y
                Dim qwidth As Integer = theWidth / 3
                Dim qheight As Integer = theHeight / 3
                theImage = Array.CreateInstance(theWidth.GetType, theWidth + 1, theHeight + 1)
                dXArr = Array.CreateInstance(theWidth.GetType, theWidth + 1, theHeight + 1)
                dYArr = Array.CreateInstance(theWidth.GetType, theWidth + 1, theHeight + 1)
                createImageDxDy(s, theImage, dXArr, dYArr, upperLeft, lowerRight)

                Dim currshape As musicShapeInfo = findShape(theImage, dXArr, dYArr, upperLeft, lowerRight)
                Select Case currshape.shape
                    Case musicShapeInfo.openNote, musicShapeInfo.filledNote
                        Me.insertInShapeArrayList(currshape, foundCircles)
                    Case musicShapeInfo.QRest
                        Me.insertInShapeArrayList(currshape, foundQRests)
                    Case musicShapeInfo.vertLine, musicShapeInfo.horzLine
                        Me.insertInShapeArrayList(currshape, foundLines)
                End Select
            Next s

            level3(foundLines, foundCircles, foundQRests, foundLines, foundCircles, foundQRests, outputArr)

            'we now go through theShapes and convert to the actual music data.  this is what
            'will be played aurally
            Dim currentBeat As Double = 0.0
            Dim theMusic As New ArrayList
            Dim nextShape As musicShapeInfo
            While outputArr.Count > 0
                nextShape = outputArr(0)
                Dim alignedShapes As New ArrayList
                alignedShapes.Add(nextShape)
                For i As Integer = 1 To outputArr.Count - 1
                    Dim shape As musicShapeInfo = outputArr(i)
                    If Convert.ToBoolean(proxRel(nextShape, shape) And inLineVert) Then
                        alignedShapes.Add(shape)
                    End If
                Next
                Dim shortestInterval As Double = Double.MaxValue
                For i As Integer = 0 To alignedShapes.Count - 1
                    Dim shape As musicShapeInfo = alignedShapes(i)
                    If shape.shape <> musicShapeInfo.horzLine And shape.shape <> musicShapeInfo.vertLine Then
                        Dim theNote As noteVal = decipherPitch(i, alignedShapes)
                        If theNote.StopTime < shortestInterval Then
                            shortestInterval = theNote.StopTime
                        End If
                        If theNote.StartTime = 0 Then 'rests have a starttime of -1
                            theNote.StartTime += currentBeat
                            theNote.StopTime += currentBeat
                            theMusic.Add(theNote)
                        End If
                    End If
                    outputArr.Remove(shape)
                Next
                currentBeat += shortestInterval
            End While

            Dim thePlayer As New DyKnow.Common.MusicPlayer
            thePlayer.playMusic(theMusic)
        Catch ex As Exception
            Log.WriteException(ex)
        End Try

    End Sub

      */
    };
}